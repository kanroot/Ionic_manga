/* eslint-disable @typescript-eslint/naming-convention */
import {IDeserializable} from './ideserializable';

export class RespuestaCatalogo {
    count: number;
    next: string;
    previous: string;
    results: MangaPreviewModel[];
}

/* Representación de un manga en su forma más básica, útil para armar catálogo.
* */
export class MangaPreviewModel implements IDeserializable<MangaPreviewModel>{
    id: number;
    nombre: string;
    enlace_img: string;
    enlace_manga: string;
    generos: string;
    generos_como_lista: string[];
    contenido_adulto: boolean;

    deserializar(input: any): MangaPreviewModel {
        return Object.assign(this, input);
    }
}
