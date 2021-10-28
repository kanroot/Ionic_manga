import {Component, OnInit, Input} from '@angular/core';
import {MangaPreviewModel} from '../../modelos/manga.modelo';

@Component({
    selector: 'app-mangapreview',
    templateUrl: './mangapreview.component.html',
    styleUrls: ['./mangapreview.component.scss'],
})
export class MangapreviewComponent implements OnInit {
    @Input() data: MangaPreviewModel;

    constructor() {
    }

    ngOnInit() {
    }
}
