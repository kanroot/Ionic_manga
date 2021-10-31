import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import {CompartidoModule} from '../../compartido/compartido.module';
import {CapituloPageModule} from '../capitulo/capitulo.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CatalogoPageRoutingModule,
        CompartidoModule,
        CapituloPageModule
    ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
