import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoPuntosPageRoutingModule } from './pago-puntos-routing.module';

import { PagoPuntosPage } from './pago-puntos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPuntosPageRoutingModule
  ],
  declarations: [PagoPuntosPage]
})
export class PagoPuntosPageModule {}
