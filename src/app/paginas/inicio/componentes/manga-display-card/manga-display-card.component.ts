import {Component, OnInit, Input} from '@angular/core';
import {MangaPreviewModel} from '../../../../compartido/modelos/manga-preview.model';

@Component({
    selector: 'app-manga-display-card',
    templateUrl: './manga-display-card.component.html',
    styleUrls: ['./manga-display-card.component.scss'],
})
export class MangaDisplayCardComponent implements OnInit {
    @Input() nombreCategoria: string;
    @Input() mangaItems: MangaPreviewModel[];

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    constructor() {
    }

    ngOnInit() {
    }

}
