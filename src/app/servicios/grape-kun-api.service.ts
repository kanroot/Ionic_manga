import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RespuestaCatalogo} from '../compartido/modelos/manga-preview.model';

@Injectable({
    providedIn: 'root'
})
export class GrapeKunApiService {

    constructor(private http: HttpClient ) { }

    consultarCatalogo(pagina: number)
    {
        return this.http.get<RespuestaCatalogo>(environment.urlCatalogo + `?page=${pagina}`);
    }
}
