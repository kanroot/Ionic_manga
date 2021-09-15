import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manga-display-card',
  templateUrl: './manga-display-card.component.html',
  styleUrls: ['./manga-display-card.component.scss'],
})
export class MangaDisplayCardComponent implements OnInit {
  @Input() nombreCategoria: string;
  @Input() mangaItems: MangaItemModel[];

  constructor() { }

  ngOnInit() {}

}

export class MangaItemModel {
  rutaImg: string;
  nombre: string;
  nCaps: number;
}
