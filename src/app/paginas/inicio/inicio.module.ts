import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InicioPageRoutingModule} from './inicio-routing.module';

import {InicioPage} from './inicio.page';
import {MangaDisplayCardComponent} from './componentes/manga-display-card/manga-display-card.component';
import {BotonNavegacionComponent} from './componentes/boton-navegacion/boton-navegacion.component';
import {CompartidoModule} from '../../compartido/compartido.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioPageRoutingModule,
        CompartidoModule
    ],
    declarations: [InicioPage, MangaDisplayCardComponent, BotonNavegacionComponent]
})
export class InicioPageModule {
}
