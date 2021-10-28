/* eslint-disable no-underscore-dangle */
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) {
        this.init();
    }

    async init(){
        this._storage = await this.storage.create();
    }

    public set(key: string, value: any): Promise<any> {
        return this._storage?.set(key, value);
    }

    public get(key: string): Promise<any> {
        return this._storage.get(key);
    }

    public remove(key: string): Promise<any> {
        return this._storage.remove(key);
    }
}
