import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiperfilPageRoutingModule } from './miperfil-routing.module';

import { MiperfilPage } from './miperfil.page';
import {CompartidoModule} from '../../compartido/compartido.module';
import {CapituloPageModule} from '../capitulo/capitulo.module';
import {InicioPageModule} from '../inicio/inicio.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MiperfilPageRoutingModule,
        CompartidoModule,
        CapituloPageModule,
        InicioPageModule
    ],
  declarations: [MiperfilPage]
})
export class MiperfilPageModule {}
