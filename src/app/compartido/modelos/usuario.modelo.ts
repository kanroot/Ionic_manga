/* eslint-disable @typescript-eslint/naming-convention */
import {MangaPreviewModel} from './manga.modelo';

export interface UsuarioModel {
    username: string;
    email: string;
    password: string;
    token_key: string;
    fec_nac: Date;
    favoritos: MangaPreviewModel[];
    preferencias: PreferenciasUsuarioModel;
}

export interface PreferenciasUsuarioModel{
    filtrar_contenido_adulto: boolean;
    guardar_credenciales_local: boolean;
}

// export const UsuarioAnonimo: UsuarioModel = {
//     username : 'Anónimo',
//     email : 'anonimo@anonimo.cl',
//     password : '1234',
//     fec_nac : new Date(Date.now()),
//     favoritos : [],
//     preferencias : {
//         filtrar_contenido_adulto: true,
//         guardar_credenciales_local: false
//     }
// };
