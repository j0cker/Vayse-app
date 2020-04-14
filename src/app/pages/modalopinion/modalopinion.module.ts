import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalopinionPageRoutingModule } from './modalopinion-routing.module';

import { ModalopinionPage } from './modalopinion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalopinionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalopinionPage]
})
export class ModalopinionPageModule {}
