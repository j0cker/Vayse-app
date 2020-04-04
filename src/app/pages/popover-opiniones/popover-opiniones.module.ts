import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverOpinionesPageRoutingModule } from './popover-opiniones-routing.module';

import { PopoverOpinionesPage } from './popover-opiniones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverOpinionesPageRoutingModule
  ],
  declarations: [PopoverOpinionesPage]
})
export class PopoverOpinionesPageModule {}
