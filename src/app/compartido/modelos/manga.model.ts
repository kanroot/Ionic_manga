import {IDeserializable} from './ideserializable';

export class ImagenModel implements IDeserializable<ImagenModel> {
    enlace: string;

    deserializar(input: any): ImagenModel {
        return Object.assign(this, input);
    }
}

export class GeneroModel implements IDeserializable<GeneroModel> {
    genero: string;

    deserializar(input: any): GeneroModel {
        return Object.assign(this, input);
    }
}

export class CapituloModel implements IDeserializable<CapituloModel> {
    nombre: string;
    enlace: string;
    imagenes: ImagenModel[];

    deserializar(input: any): CapituloModel {
        return Object.assign(this, input);
    }
}


export class MangaModel implements IDeserializable<MangaModel>{
    nombre: string;
    imagen: string;
    enlace: string;
    capitulos: CapituloModel[];
    generos: GeneroModel[];

    deserializar(input: any): MangaModel {
        return Object.assign(this, input);
    }
}
