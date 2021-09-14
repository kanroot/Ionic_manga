import { Component, OnInit } from '@angular/core';
import {MangaItemModel} from './componentes/manga-item/manga-item.component';
import {Pagina} from '../../app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  mangaItems: MangaItemModel[] = [
    {
      rutaImg : 'assets/img/devil.jpg',
      nombre : 'Manga 1',
      nCaps : 10
    },
    {
      rutaImg : 'assets/img/hitomi.jpg',
      nombre : 'Manga 2',
      nCaps : 325
    },
    {
      rutaImg : 'assets/img/berserk.jpg',
      nombre : 'Manga 3',
      nCaps : 5000
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

  constructor() { }

  ngOnInit() {
  }

}
