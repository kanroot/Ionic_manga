import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InicioPageRoutingModule} from './inicio-routing.module';

import {InicioPage} from './inicio.page';
import {MangaDisplayCardComponent} from './componentes/manga-display-card/manga-display-card.component';
import {ComponentesCompartidosModule} from '../../componentes-compartidos/componentes-compartidos.module';
import {BotonNavegacionComponent} from './componentes/boton-navegacion/boton-navegacion.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioPageRoutingModule,
        ComponentesCompartidosModule
    ],
    declarations: [InicioPage, MangaDisplayCardComponent, BotonNavegacionComponent]
})
export class InicioPageModule {
}
