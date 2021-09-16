import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HamburguesaComponent} from './componentes/hamburguesa/hamburguesa.component';
import {IonicModule} from '@ionic/angular';
import {MangapreviewComponent} from './componentes/mangapreview/mangapreview.component';


@NgModule({
    declarations: [HamburguesaComponent, MangapreviewComponent],
    exports: [
        HamburguesaComponent,
        MangapreviewComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class CompartidoModule {
}
