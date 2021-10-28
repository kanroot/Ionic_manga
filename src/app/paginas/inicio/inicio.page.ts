/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit} from '@angular/core';
import {Pagina} from '../../app.component';
import {MangaPreviewModel} from '../../compartido/modelos/manga.modelo';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    mangaItems: MangaPreviewModel[] = [
        {
            id: 1,
            nombre: 'Devilman',
            enlace_img: 'assets/img/devil.jpg',
            enlace_manga: 'https://google.cl',
            generos_como_lista: ['género 1', 'género 2'],
            generos: 'generos',
            contenido_adulto: false
        },
        {
            id: 2,
            nombre: 'Domestic no kanojo',
            enlace_img: 'assets/img/hitomi.png',
            enlace_manga: 'https://google.cl',
            generos_como_lista: ['género 1', 'género 2'],
            generos: 'generos',
            contenido_adulto: false
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
