import {IDeserializable} from './ideserializable';

/* Representación de un manga en su forma más básica, útil para armar catálogo.
* */
export class MangaPreviewModel implements IDeserializable<MangaPreviewModel>{
    nombre: string;
    enlaceImg: string;
    enlaceManga: string;
    generos: string[];

    deserializar(input: any): MangaPreviewModel {
        return Object.assign(this, input);
    }
}
