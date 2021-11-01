import {Injectable} from '@angular/core';
import {Pagina} from '../app.component';
import {Router} from '@angular/router';
import {MangaDetalleModel, MangaPreviewModel} from '../compartido/modelos/manga.modelo';
import {LoadingController} from '@ionic/angular';
import {GrapeKunApiService} from './grape-kun-api.service';
import {ErrorManagerService} from './error-manager.service';

@Injectable({
    providedIn: 'root'
})

export class DatosNavegacionService {
    paginas: Pagina[] = [
        {
            icono: 'home-outline',
            nombre: 'Inicio',
            redirectTo: '/inicio'
        },
        {
            icono: 'book-outline',
            nombre: 'Catálogo',
            redirectTo: '/catalogo'
        },
        {
            icono: 'person-circle-outline',
            nombre: 'Mi Perfil',
            redirectTo: '/miperfil'
        },
    ];

    constructor(
        private router: Router,
        private loadingController: LoadingController,
        private api: GrapeKunApiService,
        private errorManager: ErrorManagerService) {
    }

    public async navegarADetalleDesdePreview(preview: MangaPreviewModel) {
        const loading = await this.loadingController.create(
            {
                message: 'Espere por favor...',
                keyboardClose: false
            }
        );
        await loading.present();

        return await this.api.consultarMangaDetalle(preview.id).subscribe(
            (manga: MangaDetalleModel) => {
                this.router.navigate(['detalle', JSON.stringify(manga)]);
            },
            (error) => {
                this.errorManager.mostrar('Error al obtener detalle de manga', error);
            },
            () => {
                loading.dismiss();
            }
        );
    }
}
