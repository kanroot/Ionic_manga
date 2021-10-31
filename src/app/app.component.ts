import {Component} from '@angular/core';
import {DatosNavegacionService} from './servicios/datos-navegacion.service';
import {AuthService} from './servicios/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    paginas: Pagina[];

    constructor(private datosNavegacion: DatosNavegacionService, public auth: AuthService, private router: Router) {
        this.paginas = this.datosNavegacion.paginas;
    }

    async onLogout() {
        await this.auth.cerrarSesion().then(_ => {
            this.router.navigate(['/login']);
        });
    }
}

export interface Pagina {
    icono: string;
    nombre: string;
    redirectTo: string;
}


