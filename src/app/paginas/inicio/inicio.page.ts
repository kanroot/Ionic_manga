import {Component, OnInit} from '@angular/core';
import {Pagina} from '../../app.component';
import {MangaPreviewModel} from '../../compartido/modelos/manga-preview.model';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    mangaItems: MangaPreviewModel[] = [
        new MangaPreviewModel().deserializar(
            {
                nombre: 'Devilman',
                enlaceImg: 'assets/img/devil.jpg',
                enlaceManga: 'https://google.cl',
                generos: ['género 1', 'género 2']
            }
        ),
        new MangaPreviewModel().deserializar(
            {
                nombre: 'Domestic no kanojo',
                enlaceImg: 'assets/img/hitomi.png',
                enlaceManga: 'https://google.cl',
                generos: ['género 1', 'género 2']
            }
        ),
        new MangaPreviewModel().deserializar(
            {
                nombre: 'Berserk',
                enlaceImg: 'assets/img/berserk.jpg',
                enlaceManga: 'https://google.cl',
                generos: ['género 1', 'género 2']
            }
        ),
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
