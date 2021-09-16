import {Component, OnInit, Input} from '@angular/core';
import {Pagina} from '../../../../app.component';

@Component({
    selector: 'app-boton-navegacion',
    templateUrl: './boton-navegacion.component.html',
    styleUrls: ['./boton-navegacion.component.scss'],
})
export class BotonNavegacionComponent implements OnInit {
    @Input() pagina: Pagina;

    constructor() {
    }

    ngOnInit() {
    }

}
