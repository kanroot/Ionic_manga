import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import {CompartidoModule} from '../../compartido/compartido.module';
import {CapituloPageModule} from '../capitulo/capitulo.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetallePageRoutingModule,
        CompartidoModule,
        CapituloPageModule
    ],
    declarations: [DetallePage]
})
export class DetallePageModule {}
