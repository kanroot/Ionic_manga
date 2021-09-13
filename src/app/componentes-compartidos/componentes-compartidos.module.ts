import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MangapreviewComponent} from './mangapreview/mangapreview.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [MangapreviewComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [MangapreviewComponent]
})
export class ComponentesCompartidosModule { }
