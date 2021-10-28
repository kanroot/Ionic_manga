/* eslint-disable @typescript-eslint/naming-convention */
import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import {StorageService} from './storage.service';

const TOKEN_KEY = 'token-usuario';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    estaAutenticado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    token = '';

    constructor(private http: HttpClient, private storage: StorageService) {
    }

    async cargarToken() {
        const token = await this.storage.get(TOKEN_KEY);
        if (token && token.value) {
            console.log('set token: ', token.value);
            this.token = token.value;
            this.estaAutenticado.next(true);
        } else {
            this.estaAutenticado.next(false);
        }
    }

    login(credentials: {email; password}): Observable<any> {
        return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
            map((data: any) => data.token),
            switchMap(token => from(this.storage.set(TOKEN_KEY, token))),
            tap(_ => {
                this.estaAutenticado.next(true);
            })
        );
    }

    logout(): Promise<void> {
        this.estaAutenticado.next(false);
        return this.storage.remove(TOKEN_KEY);
    }
}
