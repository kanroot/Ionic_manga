import {Injectable} from '@angular/core';
import {Pagina} from '../app.component';

@Injectable({
    providedIn: 'root'
})

export class DatosNavegacionService {
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
            nombre: 'Mi Perfil',
            redirectTo: '/miperfil'
        },
    ];
    constructor() {
    }
}
