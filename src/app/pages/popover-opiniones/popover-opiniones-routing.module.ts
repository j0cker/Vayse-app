import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverOpinionesPage } from './popover-opiniones.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverOpinionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverOpinionesPageRoutingModule {}
