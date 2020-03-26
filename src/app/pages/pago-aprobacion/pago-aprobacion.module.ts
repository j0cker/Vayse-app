import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoAprobacionPageRoutingModule } from './pago-aprobacion-routing.module';

import { PagoAprobacionPage } from './pago-aprobacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoAprobacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PagoAprobacionPage]
})
export class PagoAprobacionPageModule {}
