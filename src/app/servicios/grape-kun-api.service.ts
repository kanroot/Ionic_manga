import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CapituloDetalleModel, MangaDetalleModel, RespuestaCatalogo} from '../compartido/modelos/manga.modelo';


@Injectable({
    providedIn: 'root'
})
export class GrapeKunApiService {

    constructor(private http: HttpClient ) { }

    consultarCatalogo(pagina: number) {
        const url = new URL(environment.urlCatalogo);
        url.searchParams.append('page', pagina.toString());
        return this.http.get<RespuestaCatalogo>(url.href);
    }

    consultarMangaDetalle(id: number) {
        const url = new URL(environment.urlCatalogo + id.toString());
        return this.http.get<MangaDetalleModel>(url.href);
    }

    consultarCapituloDetalle(id: number, index: number) {
        const url = new URL(environment.urlCatalogo + id.toString() +'/'+ index.toString());
        return this.http.get<CapituloDetalleModel>(url.href);
    }
}
