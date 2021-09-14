import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
}

export interface Pagina {
  icono: string;
  nombre: string;
  redirectTo: string;
}


