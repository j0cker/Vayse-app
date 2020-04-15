import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionesPageRoutingModule } from './opiniones-routing.module';

import { OpinionesPage } from './opiniones.page';
import { ComponentsModule } from '../../components/components.module';
import { ModalopinionPage } from '../modalopinion/modalopinion.page';
import { ModalopinionPageModule } from '../modalopinion/modalopinion.module';

@NgModule({
  entryComponents: [
    ModalopinionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpinionesPageRoutingModule,
    ComponentsModule,
    ModalopinionPageModule
  ],
  declarations: [OpinionesPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OpinionesPageModule {}
