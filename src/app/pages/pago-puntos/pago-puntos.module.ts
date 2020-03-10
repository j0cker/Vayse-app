import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoPuntosPageRoutingModule } from './pago-puntos-routing.module';

import { PagoPuntosPage } from './pago-puntos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPuntosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PagoPuntosPage]
})
export class PagoPuntosPageModule {}
