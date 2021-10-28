/* eslint-disable @typescript-eslint/naming-convention */

export interface RespuestaCatalogo {
    count: number;
    next: string;
    previous: string;
    results: MangaPreviewModel[];
}

export interface MangaPreviewModel {
    id: number;
    nombre: string;
    enlace_img: string;
    enlace_manga: string;
    generos: string;
    generos_como_lista: string[];
    contenido_adulto: boolean;
}

export interface ImagenModel {
    enlace: string;
}

export interface CapituloPreviewModel {
    nombre: string;
    enlace: string;
}

export interface CapituloDetalleModel {
    nombre: string;
    enlace: string;
    imagenes: ImagenModel[];
}

export interface GeneroModel {
    genero: string;
}


export interface MangaDetalleModel {
    nombre: string;
    imagen: string;
    enlace: string;
    contenido_adulto: boolean;
    generos: GeneroModel[];
    capitulos: CapituloPreviewModel[];
}

