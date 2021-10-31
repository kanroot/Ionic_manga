import {Component, OnInit} from '@angular/core';
import {CapituloDetalleModel} from '../../compartido/modelos/manga.modelo';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-capitulo',
    templateUrl: './capitulo.page.html',
    styleUrls: ['./capitulo.page.scss'],
})
export class CapituloPage implements OnInit {
    capitulo: CapituloDetalleModel;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.capitulo = JSON.parse( this.route.snapshot.paramMap.get('datos'));
    }

}
