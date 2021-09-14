import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import {MangaDisplayCardComponent} from './componentes/manga-display-card/manga-display-card.component';
import {ComponentesCompartidosModule} from '../../componentes-compartidos/componentes-compartidos.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioPageRoutingModule,
        ComponentesCompartidosModule
    ],
    declarations: [InicioPage, MangaDisplayCardComponent]
})
export class InicioPageModule {}
