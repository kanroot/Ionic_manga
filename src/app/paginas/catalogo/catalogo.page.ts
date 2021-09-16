import {Component, OnInit} from '@angular/core';
import {MangaPreviewModel} from '../../compartido/modelos/manga-preview.model';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.page.html',
    styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
    //TODO: tomar desde servicio en lugar hardcodear
    catalogo: MangaPreviewModel[] = [
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

    constructor() {
    }

    ngOnInit() {
    }

}
