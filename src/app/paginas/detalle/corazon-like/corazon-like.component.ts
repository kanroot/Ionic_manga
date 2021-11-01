import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-corazon-like',
    templateUrl: './corazon-like.component.html',
    styleUrls: ['./corazon-like.component.scss'],
})
export class CorazonLikeComponent implements OnInit {
    @Input() favorito: boolean;

    @Input() colorcito: string;
    constructor() {
    }

    ngOnInit() {
    }

}
