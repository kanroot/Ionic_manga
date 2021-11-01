import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastManagerService {

    constructor(private toasController: ToastController) {
    }

    public async mostrar(mensaje: string, color: string='success') {
        const toast = await this.toasController.create({
            message: mensaje,
            duration: 3000,
            position: 'top',
            color
        });
        await toast.present();
    }
}
