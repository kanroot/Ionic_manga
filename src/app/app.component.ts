import {Component} from '@angular/core';
import {DatosNavegacionService} from './servicios/datos-navegacion.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    paginas: Pagina[];

    constructor(private datosNavegacion: DatosNavegacionService) {
        this.paginas = this.datosNavegacion.paginas;
    }
}

export interface Pagina {
    icono: string;
    nombre: string;
    redirectTo: string;
}


