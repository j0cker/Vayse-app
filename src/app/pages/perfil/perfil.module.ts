import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';
import { PerfilModalPageModule } from '../perfil-modal/perfil-modal.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents:[
    PerfilModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    PerfilModalPageModule,
    ComponentsModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
