/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CapituloPreviewModel, MangaDetalleModel, MangaPreviewModel} from '../../compartido/modelos/manga.modelo';
import {LoadingController} from '@ionic/angular';
import {GrapeKunApiService} from '../../servicios/grape-kun-api.service';
import {AuthService} from '../../servicios/auth.service';
import {CorazonLikeComponent} from './corazon-like/corazon-like.component';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
    @ViewChild(CorazonLikeComponent) corazon: CorazonLikeComponent;
    detalle: MangaDetalleModel;
    valueCorazon: boolean;

    constructor(
        private route: ActivatedRoute,
        private loadingController: LoadingController,
        private api: GrapeKunApiService,
        private router: Router,
        private auth: AuthService) {

        this.auth.usuarioConectado.subscribe((_) => this.onCambioDatosUsuario());
    }

    ngOnInit() {
        this.detalle = JSON.parse(this.route.snapshot.paramMap.get('datos'));
    }

    onCambioDatosUsuario() {
        // this.corazon.colorcito = this.comprobarFavorito() ? 'danger' : 'medium';
    }

    comprobarFavorito(): boolean {
        if (this.usuarioAutenticado) {
            for (const manga of this.auth.datosUsuario.favoritos) {
                if (manga.id === this.detalle.manga_id) {
                    console.log('manga encontrado en favoritos');
                    this.valueCorazon = true;
                    return true;
                }
                this.valueCorazon = false;
            }
        }
        console.log('manga no encontrado en favoritos');
        return false;
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

    toggleFavoritos() {
        if (!this.usuarioAutenticado) {
            return;
        }
        const esFavorito = this.comprobarFavorito();

        if (esFavorito) {
            this.eliminarDeFavoritos();
        } else {
            this.agregarAFavoritos();
        }
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
        console.log('Eliminando de favoritos', this.detalle);
        this.auth.datosUsuario.favoritos.forEach(
            (manga, index) => {
                if (manga.id === this.detalle.manga_id) {
                    const usuario = this.auth.datosUsuario;
                    usuario.favoritos.splice(index, 1);
                    this.auth.actualizarUsuario(usuario);
                }
            }
        );
    }

    private agregarAFavoritos() {
        console.log('Agregando a favoritos:', this.detalle);
        const mangaPreview = this.obtenerComoPreview();
        const usuario = this.auth.datosUsuario;
        usuario.favoritos.push(mangaPreview);
        this.auth.actualizarUsuario(usuario);
    }
}
