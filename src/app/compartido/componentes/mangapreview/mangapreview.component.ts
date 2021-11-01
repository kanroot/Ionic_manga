import {Component, OnInit, Input} from '@angular/core';
import {MangaPreviewModel} from '../../modelos/manga.modelo';
import {DatosNavegacionService} from '../../../servicios/datos-navegacion.service';

@Component({
    selector: 'app-mangapreview',
    templateUrl: './mangapreview.component.html',
    styleUrls: ['./mangapreview.component.scss'],
})
export class MangapreviewComponent implements OnInit {
    @Input() data: MangaPreviewModel;

    constructor(public nav: DatosNavegacionService) {
    }

    ngOnInit() {
    }
}
