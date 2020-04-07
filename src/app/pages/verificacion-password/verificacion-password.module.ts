import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
  declarations: [VerificacionPasswordPage],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class VerificacionPasswordPageModule {}
