import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordPageRoutingModule } from './password-routing.module';

import { PasswordPage } from './password.page';

import { VerificacionPasswordPage } from '../verificacion-password/verificacion-password.page';
import { VerificacionPasswordPageModule } from '../verificacion-password/verificacion-password.module';

@NgModule({
  entryComponents: [
    VerificacionPasswordPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordPageRoutingModule,
    VerificacionPasswordPageModule
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule {}
