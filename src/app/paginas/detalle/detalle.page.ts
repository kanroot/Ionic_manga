import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CapituloPreviewModel, MangaDetalleModel} from '../../compartido/modelos/manga.modelo';
import {LoadingController} from '@ionic/angular';
import {GrapeKunApiService} from '../../servicios/grape-kun-api.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
    detalle: MangaDetalleModel;

    constructor(
        private route: ActivatedRoute,
        private loadingController: LoadingController,
        private api: GrapeKunApiService,
        private router: Router) {
    }

    ngOnInit() {
        this.detalle = JSON.parse( this.route.snapshot.paramMap.get('datos'));
    }

    async obtenerCapituloDesdeCapPreview(capIndex: number) {
        const loading = await this.loadingController.create(
            {
                message: 'Espere por favor...',
                keyboardClose: false
            }
        );
        await loading.present();
        this.api.consultarCapituloDetalle(this.detalle.manga_id, capIndex).subscribe(
            resp => {
                loading.dismiss();
                this.navegarACapitulo(resp);
            },
        );
    }

    navegarACapitulo(capitulo: CapituloPreviewModel) {
        this.router.navigate(['/capitulo', JSON.stringify(capitulo)]);
    }
}
