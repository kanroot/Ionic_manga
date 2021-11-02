import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from '../../compartido/modelos/usuario.modelo';
import {AuthService} from '../../servicios/auth.service';

@Component({
    selector: 'app-miperfil',
    templateUrl: './miperfil.page.html',
    styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
    datosPerfil: UsuarioModel;
    filtrarAdulto: boolean;
    autologin: boolean;

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.datosPerfil = this.auth.datosUsuario;
        this.filtrarAdulto = this.datosPerfil.preferencias.filtrar_contenido_adulto;
        this.autologin = this.datosPerfil.preferencias.auto_login;
    }

    actualizarPreferencias(){
        console.log('Actualizando preferencias', this.filtrarAdulto, this.autologin);
        const usuario = this.auth.datosUsuario;
        usuario.preferencias.filtrar_contenido_adulto = this.filtrarAdulto;
        usuario.preferencias.auto_login = this.autologin;
        this.auth.actualizarUsuario(usuario);
    }
}
