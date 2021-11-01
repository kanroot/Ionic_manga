import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ErrorManagerService {

    constructor(private alertController: AlertController) {
    }

    async mostrar(header: string, mensaje: string) {
        const alert = await this.alertController.create({
            header,
            message: mensaje,
            buttons: ['OK']
        });
        await alert.present();
        console.log(header, mensaje);
    }
}
