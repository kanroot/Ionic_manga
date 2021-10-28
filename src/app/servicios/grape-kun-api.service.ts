import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MangaDetalleModel, RespuestaCatalogo} from '../compartido/modelos/manga.modelo';


@Injectable({
    providedIn: 'root'
})
export class GrapeKunApiService {

    constructor(private http: HttpClient ) { }

    consultarCatalogo(pagina: number) {
        return this.http.get<RespuestaCatalogo>(environment.urlCatalogo + `?page=${pagina}`);
    }

    consultarMangaDetalle(id: number) {
        return this.http.get<MangaDetalleModel>(environment.urlCatalogo + id);
    }
}
