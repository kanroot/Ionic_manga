import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-item',
  templateUrl: './manga-item.component.html',
  styleUrls: ['./manga-item.component.scss'],
})
export class MangaItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

export class MangaItemModel {
  rutaImg: string;
  nombre: string;
  nCaps: number;
}
