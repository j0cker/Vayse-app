import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacionPasswordPageRoutingModule } from './verificacion-password-routing.module';

import { VerificacionPasswordPage } from './verificacion-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacionPasswordPageRoutingModule
  ],
  declarations: [VerificacionPasswordPage]
})
export class VerificacionPasswordPageModule {}
