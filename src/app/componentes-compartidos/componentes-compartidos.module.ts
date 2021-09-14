import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangapreviewComponent } from './mangapreview/mangapreview.component';
import { IonicModule } from '@ionic/angular';
import { HamburguesaComponent } from './hamburguesa/hamburguesa.component';


@NgModule({
  declarations: [MangapreviewComponent, HamburguesaComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [MangapreviewComponent, HamburguesaComponent]
})
export class ComponentesCompartidosModule { }
