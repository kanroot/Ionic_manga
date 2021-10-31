import {Component, OnInit} from '@angular/core';
import {UsuarioAnonimo, UsuarioModel} from '../../compartido/modelos/usuario.modelo';

@Component({
    selector: 'app-miperfil',
    templateUrl: './miperfil.page.html',
    styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
    datosPerfil: UsuarioModel = UsuarioAnonimo;

    constructor() {
    }

    ngOnInit() {
    }

}
