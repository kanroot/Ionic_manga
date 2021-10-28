import {Component, OnInit} from '@angular/core';
import {MangaDetalleModel, MangaPreviewModel, RespuestaCatalogo} from '../../compartido/modelos/manga.modelo';
import {GrapeKunApiService} from '../../servicios/grape-kun-api.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.page.html',
    styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
    paginaActual = 1;
    catalogo: MangaPreviewModel[] = [];
    resp: RespuestaCatalogo;

    constructor(private api: GrapeKunApiService, private router: Router, public loadingController: LoadingController) {
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

    async obtenerDetalleDesdeCatalogo(preview: MangaPreviewModel) {
        const loading = await this.loadingController.create(
            {
                message: 'Espere por favor...',
                keyboardClose: false
            }
        );
        await loading.present();
        this.api.consultarMangaDetalle(preview.id).subscribe(
            resp => {
                this.navegarAPaginaDetalle(resp);
                loading.dismiss();
            }
        );
    }

    navegarAPaginaDetalle(detalle: MangaDetalleModel) {
        this.router.navigate(['detalle', JSON.stringify(detalle)]);
    }
}
