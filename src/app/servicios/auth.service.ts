/* eslint-disable @typescript-eslint/naming-convention */
import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import {StorageService} from './storage.service';
import {UsuarioAnonimo, UsuarioModel} from '../compartido/modelos/usuario.modelo';

const TOKEN_KEY = 'token-usuario';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    estaAutenticado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    token = '';
    usuarioConectado: UsuarioModel;

    constructor(private http: HttpClient, private storage: StorageService) {
        this.estaAutenticado.subscribe((nuevoEstado: boolean) => this.onCambioEstadoAutenticado(nuevoEstado));
        this.intentaAutoLogin();
    }

    onCambioEstadoAutenticado(nuevoEstado: boolean){
        console.log('Cambio de estado de autenticado: ', nuevoEstado);
        if (nuevoEstado) {
            this.usuarioConectado = UsuarioAnonimo;
        } else {
            this.usuarioConectado = null;
        }
    }

    async intentaAutoLogin(): Promise<boolean> {
        console.log('Intentando autologin');
        return await this.storage.obtener(TOKEN_KEY).then(
            (token) => {
                this.token = token.value;
                this.iniciarSesionConToken(token.value);
                console.log('Autologin exitoso');
                return true;
            },
            (reason) => {
                this.token = '';
                this.cerrarSesion();
                console.log('Autologin fallido:', reason);
                return false;
            }
        );
    }

    iniciarSesionConCredenciales(credentials: {email; password}): Observable<any> {
        console.log('Iniciando sesion con credenciales');
        return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
            map((data: any) => data.token),
            switchMap(token => from(this.storage.escribir(TOKEN_KEY, token))),
            tap(_ => {
                this.usuarioConectado = UsuarioAnonimo;
                this.estaAutenticado.next(true);
            })
        );
    }

    async iniciarSesionConToken(token: string){
        console.log('Iniciando sesion con token');
        this.estaAutenticado.next(true);
    }


   async cerrarSesion(): Promise<void> {
        console.log('Cerrando sesion');
        this.token = '';
        this.storage.eliminar(TOKEN_KEY);
        this.estaAutenticado.next(false);
        return Promise.resolve();
    }

    async conservarTokenEnlocal()  {
        console.log('Conservando token en local');
        return await this.storage.escribir(TOKEN_KEY, this.token);
    }
}
