import {Component, OnInit} from '@angular/core';
import {MangaPreviewModel} from '../../componentes-compartidos/mangapreview/mangapreview.component';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.page.html',
    styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
    //TODO: tomar desde servicio en lugar hardcodear
    catalogo: MangaPreviewModel[] = [
        {
            id: 0,
            nombre: 'Devilman',
            rutaImg: 'assets/img/devil.jpg'
        },
        {
            id: 1,
            nombre: 'Domestic na kanojo',
            rutaImg: 'assets/img/hitomi.png'
        },
        {
            id: 2,
            nombre: 'Berserk',
            rutaImg: 'assets/img/berserk.jpg'
        },
        {
            id: 0,
            nombre: 'Devilman',
            rutaImg: 'assets/img/devil.jpg'
        },
        {
            id: 1,
            nombre: 'Domestic na kanojo',
            rutaImg: 'assets/img/hitomi.png'
        },
        {
            id: 2,
            nombre: 'Berserk',
            rutaImg: 'assets/img/berserk.jpg'
        },
        {
            id: 0,
            nombre: 'Devilman',
            rutaImg: 'assets/img/devil.jpg'
        },
        {
            id: 1,
            nombre: 'Domestic na kanojo',
            rutaImg: 'assets/img/hitomi.png'
        },
        {
            id: 2,
            nombre: 'Berserk',
            rutaImg: 'assets/img/berserk.jpg'
        },
        {
            id: 0,
            nombre: 'Devilman',
            rutaImg: 'assets/img/devil.jpg'
        },
        {
            id: 1,
            nombre: 'Domestic na kanojo',
            rutaImg: 'assets/img/hitomi.png'
        },
        {
            id: 2,
            nombre: 'Berserk',
            rutaImg: 'assets/img/berserk.jpg'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
