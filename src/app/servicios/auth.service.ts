/* eslint-disable @typescript-eslint/naming-convention */
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import {StorageService} from './storage.service';
import {
    RespuestaUsuario,
    UsuarioModel,
    UsuarioRegistroModel
} from '../compartido/modelos/usuario.modelo';
import {environment} from '../../environments/environment';
import {ToastManagerService} from './toast-manager.service';
import {ErrorManagerService} from './error-manager.service';

const TOKEN_KEY = 'token-usuario';
const USUARIO_ANONIMO: UsuarioModel = {
    id: -1,
    username: 'Anónimo',
    fec_nac: null,
    email: '',
    favoritos: [],
    preferencias: {
        filtrar_contenido_adulto: true,
        auto_login: false
    }
};

export class EstadoAuth {
    estaAutenticado: boolean;
    datosUsuario: UsuarioModel;

    constructor(estaAutenticado: boolean, datosUsuario: UsuarioModel) {
        this.estaAutenticado = estaAutenticado;
        this.datosUsuario = datosUsuario;
    }
}


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    estaAutenticado: BehaviorSubject<EstadoAuth> = new BehaviorSubject<EstadoAuth>(null);
    token = '';
    usuarioConectado: UsuarioModel;

    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private toast: ToastManagerService,
        private errorManager: ErrorManagerService) {
        this.estaAutenticado.subscribe((nuevoEstado: EstadoAuth) => this.onCambioEstadoAutenticado(nuevoEstado));
        this.intentaAutoLogin();
    }

    onCambioEstadoAutenticado(nuevoEstado: EstadoAuth) {
        console.log('Cambio de estado de autenticado: ', nuevoEstado);
        if ( nuevoEstado && nuevoEstado.estaAutenticado) {
            this.usuarioConectado = nuevoEstado.datosUsuario;
            this.toast.mostrar('Bienvenido de vuelta, ' + this.usuarioConectado.username);
        } else {
            this.usuarioConectado = USUARIO_ANONIMO;
        }
    }

    async intentaAutoLogin(): Promise<boolean> {
        console.log('Intentando autologin');
        return await this.storage.obtener(TOKEN_KEY).then(
            (token) => {
                this.token = token;
                this.iniciarSesionConToken(token);
                console.log('Autologin exitoso');
                return true;
            },
            (reason) => {
                this.token = '';
                console.log('Autologin fallido:', reason);
                return false;
            }
        );
    }

    iniciarSesionConCredenciales(credentials: { email; password }): Observable<any> {
        console.log('Iniciando sesion con credenciales', credentials);
        return this.http.post(environment.urlLogin, credentials).pipe(
            map((data: RespuestaUsuario) => data),
            tap(async (data: RespuestaUsuario) => {
                await this.estaAutenticado.next(new EstadoAuth(true, data.user));
            }),
            switchMap(data => {
                this.token = data.token;
                return this.conservarTokenEnlocal();
            }),
        );
    }

    async iniciarSesionConToken(token: string) {
        console.log('Iniciando sesion con token: ', token);
        const headers = new HttpHeaders(
            {
                'Content-Type': 'application/json',
                Authorization: 'Token ' + token
            }
        );
        console.log(headers);

        return this.http.post(environment.urlLoginToken, {}, {headers}).subscribe(
            (data: RespuestaUsuario) => {
                this.usuarioConectado = data.user;
                this.estaAutenticado.next(new EstadoAuth(true, data.user));
                this.conservarTokenEnlocal();
            },
            (error) => {
                this.errorManager.mostrar('Error al iniciar sesión con token', error.error.detail);
            }
        );
    }

    async registrarUsuario(usuario: UsuarioRegistroModel) {
        console.log('Registrando usuario');
        return this.http.post(environment.urlRegistro, usuario).subscribe(
            async (data: RespuestaUsuario) => {
                await this.iniciarSesionConToken(data.token);
                return data;
            },
            async (error) => {
                this.errorManager.mostrar('Error al registrarse', error.error.detail);
            }
        );
    }

    async cerrarSesion(): Promise<void> {
        console.log('Cerrando sesion');
        this.token = '';
        this.storage.eliminar(TOKEN_KEY);
        this.estaAutenticado.next(new EstadoAuth(false, null));
        return Promise.resolve();
    }

    async conservarTokenEnlocal() {
        if (!this.usuarioConectado.preferencias.auto_login) {
            return;
        }

        console.log('Conservando token en local');
        return await this.storage.escribir(TOKEN_KEY, this.token);
    }

    actualizarPreferencias(filtrar: boolean, autologin: boolean) {
        const usuario = {
            username: this.usuarioConectado.username,
            email: this.usuarioConectado.email,
            fec_nac: this.usuarioConectado.fec_nac,
            preferencias_string: JSON.stringify(
                {
                    filtrar_contenido_adulto: filtrar,
                    auto_login: autologin
                }
            ),
            favoritos_string: JSON.stringify(this.usuarioConectado.favoritos)
        };
        const headers = new HttpHeaders(
            {
                'Content-Type': 'application/json',
                Authorization: 'Token ' + this.token
            }
        );

        return this.http.post(environment.urlActualizar, usuario, {headers}).subscribe(
            (data: any) => {
                this.usuarioConectado = {
                    id: this.usuarioConectado.id,
                    username: data.username,
                    email: data.email,
                    fec_nac: data.fec_nac,
                    preferencias: JSON.parse(data.preferencias_string),
                    favoritos: JSON.parse(data.favoritos_string)
                };
                this.toast.mostrar('Preferencias actualizadas');
                this.conservarTokenEnlocal();
            },
            (error) => {
                this.errorManager.mostrar('Error al actualizar preferencias', error.error.detail);
            }
        );
    }
}
