import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoAprobacionPage } from './pago-aprobacion.page';

const routes: Routes = [
  {
    path: '',
    component: PagoAprobacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoAprobacionPageRoutingModule {}
