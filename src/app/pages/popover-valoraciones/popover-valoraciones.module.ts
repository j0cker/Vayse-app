import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverValoracionesPageRoutingModule } from './popover-valoraciones-routing.module';

import { PopoverValoracionesPage } from './popover-valoraciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverValoracionesPageRoutingModule
  ],
  declarations: [PopoverValoracionesPage]
})
export class PopoverValoracionesPageModule {}
