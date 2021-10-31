/* eslint-disable @typescript-eslint/naming-convention */
import {MangaPreviewModel} from './manga.modelo';

export interface UsuarioModel {
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

export const UsuarioAnonimo: UsuarioModel = {
    username : 'Anónimo',
    email : 'anonimo@anonimo.cl',
    fec_nac : new Date(Date.now()),
    favoritos : [],
    preferencias : {
        filtrar_contenido_adulto: true,
        auto_login: false
    }
};
