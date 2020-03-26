import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsigniasPageRoutingModule } from './insignias-routing.module';

import { InsigniasPage } from './insignias.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsigniasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InsigniasPage]
})
export class InsigniasPageModule {}
