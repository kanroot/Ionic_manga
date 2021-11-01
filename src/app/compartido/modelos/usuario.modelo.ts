/* eslint-disable @typescript-eslint/naming-convention */
import {MangaPreviewModel} from './manga.modelo';

export interface RespuestaUsuario {
    user: UsuarioModel;
    token: string;
}

export interface UsuarioModel {
    id: number;
    username: string;
    email: string;
    fec_nac: Date;
    favoritos: MangaPreviewModel[];
    preferencias: PreferenciasUsuarioModel;
}

export interface PreferenciasUsuarioModel{
    filtrar_contenido_adulto: boolean;
    auto_login: boolean;
}

export interface UsuarioRegistroModel {
    username: string;
    email: string;
    password: string;
    fec_nac: Date;
}
