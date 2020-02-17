import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoPuntosPage } from './pago-puntos.page';

const routes: Routes = [
  {
    path: '',
    component: PagoPuntosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoPuntosPageRoutingModule {}
