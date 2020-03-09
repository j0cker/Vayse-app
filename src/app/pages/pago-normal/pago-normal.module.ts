import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoNormalPageRoutingModule } from './pago-normal-routing.module';

import { PagoNormalPage } from './pago-normal.page';

import { PagoAprobacionPage } from '../pago-aprobacion/pago-aprobacion.page';
import { PagoAprobacionPageModule } from '../pago-aprobacion/pago-aprobacion.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents: [
    PagoAprobacionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoNormalPageRoutingModule,
    PagoAprobacionPageModule,
    ComponentsModule
  ],
  declarations: [PagoNormalPage]
})
export class PagoNormalPageModule {}
