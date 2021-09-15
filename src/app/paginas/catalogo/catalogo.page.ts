import { Component, OnInit } from '@angular/core';
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
      nombre: 'Manga 1',
      rutaImg: 'assets/img/devil.jpg'
    },
    {
      id: 1,
      nombre: 'Manga 2',
      rutaImg: 'assets/img/hitomi.jpg'
    },
    {
      id: 2,
      nombre: 'Manga 3',
      rutaImg: 'assets/img/berserk.jpg'
    },
    {
      id: 3,
      nombre: 'Manga 4',
      rutaImg: 'assets/img/devil.jpg'
    },
    {
      id: 4,
      nombre: 'Manga 5',
      rutaImg: 'assets/img/hitomi.jpg'
    },
    {
      id: 0,
      nombre: 'Manga 1',
      rutaImg: 'assets/img/berserk.jpg'
    },
    {
      id: 1,
      nombre: 'Manga 2',
      rutaImg: 'assets/img/devil.jpg'
    },
    {
      id: 2,
      nombre: 'Manga 3',
      rutaImg: 'assets/img/hitomi.jpg'
    },
    {
      id: 3,
      nombre: 'Manga 4',
      rutaImg: 'assets/img/berserk.jpg'
    },
    {
      id: 4,
      nombre: 'Manga 5',
      rutaImg: 'assets/img/devil.jpg'
    },
    {
      id: 0,
      nombre: 'Manga 1',
      rutaImg: 'assets/img/hitomi.jpg'
    },
    {
      id: 1,
      nombre: 'Manga 2',
      rutaImg: 'assets/img/berserk.jpg'
    },
    {
      id: 2,
      nombre: 'Manga 3',
      rutaImg: 'assets/img/devil.jpg'
    },
    {
      id: 3,
      nombre: 'Manga 4',
      rutaImg: 'assets/img/hitomi.jpg'
    },
    {
      id: 4,
      nombre: 'Manga 5',
      rutaImg: 'assets/img/berserk.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
