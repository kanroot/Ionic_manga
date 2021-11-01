/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CapituloPreviewModel, MangaDetalleModel, MangaPreviewModel} from '../../compartido/modelos/manga.modelo';
import {LoadingController} from '@ionic/angular';
import {GrapeKunApiService} from '../../servicios/grape-kun-api.service';
import {AuthService} from '../../servicios/auth.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
    detalle: MangaDetalleModel;
    likedColor = 'shade';

    constructor(
        private route: ActivatedRoute,
        private loadingController: LoadingController,
        private api: GrapeKunApiService,
        private router: Router,
        private auth: AuthService) {
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

    get usuarioAutenticado(): boolean {
        return this.auth?.estado?.value?.estaAutenticado;
    }

    get esFavorito(): boolean {
        if (this.usuarioAutenticado) {
            for (const manga of this.auth.estado.value.datosUsuario.favoritos) {
                if (manga.id === this.detalle.manga_id) {
                    return true;
                }
            }
        }
        return false;
    }

    toggleFavoritos(){
        if (!this.usuarioAutenticado) {
            return;
        }

        if (this.esFavorito) {
            this.eliminarDeFavoritos();
        } else {
            this.agregarAFavoritos();
        }

        this.auth.actualizarUsuario();
    }

    private obtenerComoPreview() {
        const preview: MangaPreviewModel = {
            id: this.detalle.manga_id,
            nombre: this.detalle.nombre,
            enlace_img: this.detalle.imagen,
            enlace_manga: this.detalle.enlace,
            generos: this.generos,
            generos_como_lista: this.generosComoLista,
            contenido_adulto: this.detalle.contenido_adulto
        };

        return preview;
    }

    get generos(): string {
        let t = '';
        for (const g of this.detalle.generos) {
            t += g + ';';
        }

        return t.slice(0, -1);
    }

    get generosComoLista(): string[] {
        const gs = [];
        for (const g of this.detalle.generos) {
            gs.push(g);
        }

        return gs;
    }

    private eliminarDeFavoritos() {
        this.auth.usuarioConectado.favoritos.forEach(
            (manga, index) => {
                if (manga.id === this.detalle.manga_id) {
                    this.auth.usuarioConectado.favoritos.splice(index, 1);
                }
            }
        );
    }

    private agregarAFavoritos() {
        const mangaPreview = this.obtenerComoPreview();
        this.auth.usuarioConectado.favoritos.push(mangaPreview);
    }
}
