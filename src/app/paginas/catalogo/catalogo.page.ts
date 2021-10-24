import {Component, OnInit} from '@angular/core';
import {MangaPreviewModel} from '../../compartido/modelos/manga-preview.model';
import {GrapeKunApiService} from '../../servicios/grape-kun-api.service';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.page.html',
    styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
    catalogo: MangaPreviewModel[] = [];

    constructor(private api: GrapeKunApiService) {
    }

    ngOnInit() {
        this.api.consultarCatalogo().subscribe(resp => {
            this.catalogo.push(...resp.results);
        });
    }
}
