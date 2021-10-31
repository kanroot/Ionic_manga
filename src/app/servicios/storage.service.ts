/* eslint-disable no-underscore-dangle */
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) {
        this.asegurarInicio();
    }

    async asegurarInicio() {
        // Este asquito de solución es necesario porque de otro modo ._storage es null al intentar
        // acceder antes de que haya terminado de inicializar
        // fuente: https://github.com/ionic-team/ionic-storage/issues/229
        if (this._storage != null) {
            return;
        }

        this._storage = await this.storage.create();
    }

    public async escribir(key: string, value: any): Promise<any> {
        await this.asegurarInicio();
        console.log('Escribiendo key: ', key, 'Con valor:', value);
        return await this._storage.set(key, value);
    }

    public async obtener(key: string): Promise<any> {
        await this.asegurarInicio();
        console.log('Obteniendo key: ', key);
        return await this._storage.get(key).then(
            (value) => {
                if (value) {
                    console.log('Valor obtenido:', value);
                    return value;
                } else {
                    return Promise.reject('Valor no encontrado');
                }
            });
    }

    public async eliminar(key: string): Promise<any> {
        await this.asegurarInicio();
        console.log('Eliminando key: ', key);
        return await this._storage.remove(key).then(
            (value) => {
                if (value) {
                    console.log('Valor eliminado:', value);
                    return value;
                } else {
                    console.log('Imposible eliminar, valor no encontrado');
                }
            });
    }
}
