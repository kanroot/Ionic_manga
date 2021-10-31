import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapituloPageRoutingModule } from './capitulo-routing.module';

import { CapituloPage } from './capitulo.page';
import {HeaderComponent} from '../../compartido/componentes/header/header.component';
import {CompartidoModule} from '../../compartido/compartido.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CapituloPageRoutingModule,
        CompartidoModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [CapituloPage, HeaderComponent]
})
export class CapituloPageModule {}
