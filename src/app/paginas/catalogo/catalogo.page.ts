import {Component, OnInit} from '@angular/core';
import {MangaPreviewModel, RespuestaCatalogo} from '../../compartido/modelos/manga.modelo';
import {GrapeKunApiService} from '../../servicios/grape-kun-api.service';
import {DatosNavegacionService} from '../../servicios/datos-navegacion.service';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.page.html',
    styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
    paginaActual = 1;
    catalogo: MangaPreviewModel[] = [];
    resp: RespuestaCatalogo;

    constructor(private api: GrapeKunApiService, public nav: DatosNavegacionService) {
    }

    ngOnInit() {
        this.consultarCatalogoPorPagina(1);
    }

    consultarCatalogoPorPagina(pagina: number) {
        this.api.consultarCatalogo(pagina).subscribe(resp => {
            this.resp = resp;
            this.catalogo.push(...resp.results);
        });
    }

    cargarMasMangas(infiniteScroll) {
        if (this.resp.next != null) {
            this.paginaActual += 1;
            setTimeout(
                () => {
                    this.consultarCatalogoPorPagina(this.paginaActual);
                }, 500
            );
        }
        infiniteScroll.target.complete();
    }
}
