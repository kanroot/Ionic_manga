/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit} from '@angular/core';
import {Pagina} from '../../app.component';
import {MangaPreviewModel} from '../../compartido/modelos/manga.modelo';
import {DatosNavegacionService} from '../../servicios/datos-navegacion.service';
import {AuthService, EstadoAuth} from '../../servicios/auth.service';
import {GrapeKunApiService} from '../../servicios/grape-kun-api.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    mangaFavoritos: MangaPreviewModel[] = [];
    mangaAleatorios: MangaPreviewModel[] = [];

    paginas: Pagina[];

    constructor(
        private datosNavegacion: DatosNavegacionService,
        public auth: AuthService,
        private api: GrapeKunApiService) {

        this.paginas = this.datosNavegacion.paginas;
        this.auth.estado.subscribe((nuevoEstado: EstadoAuth) => this.cambioAutenticacion(nuevoEstado));
    }

    ngOnInit() {
    }

    obtenerAleatorios() {
        this.mangaAleatorios = [];
        for (let i =0; i < 3; i++) {
            this.api.consultarMangaAleatorio().subscribe(
                (manga: MangaPreviewModel) => {
                    this.mangaAleatorios.push(manga);
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }

    cambioAutenticacion(nuevoEstado: EstadoAuth){
        if (nuevoEstado?.estaAutenticado && nuevoEstado?.datosUsuario) {
            this.mangaFavoritos = nuevoEstado.datosUsuario.favoritos;
            this.obtenerAleatorios();
            return;
        }
        this.obtenerAleatorios();
        this.mangaFavoritos = [];
    }

    get usuarioAutenticado(): boolean {
        return this.auth?.estado?.value?.estaAutenticado;
    }

    get permitirNsfw(): boolean {
        return Boolean(this.usuarioAutenticado &&
            !this.auth?.estado?.value?.datosUsuario?.preferencias.filtrar_contenido_adulto);
    }
}
