import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import {ComponentesCompartidosModule} from '../../componentes-compartidos/componentes-compartidos.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetallePageRoutingModule,
        ComponentesCompartidosModule
    ],
  declarations: [DetallePage]
})
export class DetallePageModule {}
