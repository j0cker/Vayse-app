import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverValoracionesPage } from './popover-valoraciones.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverValoracionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverValoracionesPageRoutingModule {}
