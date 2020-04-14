import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalopinionPage } from './modalopinion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalopinionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalopinionPageRoutingModule {}
