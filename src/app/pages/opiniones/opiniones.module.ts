import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionesPageRoutingModule } from './opiniones-routing.module';

import { OpinionesPage } from './opiniones.page';
import { ComponentsModule } from '../../components/components.module';
import { PopopinionComponent } from '../../components/popopinion/popopinion.component';

@NgModule({
  entryComponents: [
    PopopinionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpinionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OpinionesPage]
})
export class OpinionesPageModule {}
