import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import {ComponentesCompartidosModule} from '../../componentes-compartidos/componentes-compartidos.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CatalogoPageRoutingModule,
        ComponentesCompartidosModule
    ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
