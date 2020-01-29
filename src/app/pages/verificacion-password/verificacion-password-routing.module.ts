import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificacionPasswordPage } from './verificacion-password.page';

const routes: Routes = [
  {
    path: '',
    component: VerificacionPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificacionPasswordPageRoutingModule {}
