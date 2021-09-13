import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mangapreview',
  templateUrl: './mangapreview.component.html',
  styleUrls: ['./mangapreview.component.scss'],
})
export class MangapreviewComponent implements OnInit {
  @Input() data: MangaPreviewModel;

  constructor() { }

  ngOnInit() {}

}

export interface MangaPreviewModel {
  id: number;
  rutaImg: string;
  nombre: string;
}
