import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MangaDetalleModel} from '../../compartido/modelos/manga.modelo';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
    detalle: MangaDetalleModel;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.detalle = JSON.parse( this.route.snapshot.paramMap.get('datos'));
    }
}
