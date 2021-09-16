import {Component, OnInit} from '@angular/core';
import {MangaItemModel} from './componentes/manga-display-card/manga-display-card.component';
import {Pagina} from '../../app.component';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    mangaItems: MangaItemModel[] = [
        {
            rutaImg: 'assets/img/devil.jpg',
            nombre: 'Devilman',
            nCaps: 10
        },
        {
            rutaImg: 'assets/img/hitomi.png',
            nombre: 'Domestic na kanojo',
            nCaps: 325
        },
        {
            rutaImg: 'assets/img/berserk.jpg',
            nombre: 'Berserk',
            nCaps: 5000
        },
    ];

    //Buscar forma de evitar tener que definir esto dos veces
    paginas: Pagina[] = [
        {
            icono: 'home-outline',
            nombre: 'Inicio',
            redirectTo: '/inicio'
        },
        {
            icono: 'book-outline',
            nombre: 'Catálogo',
            redirectTo: '/catalogo'
        },
        {
            icono: 'person-circle-outline',
            nombre: 'Registro',
            redirectTo: '/registro'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
