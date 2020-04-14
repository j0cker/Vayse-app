import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSubcategoriaPage } from './map-subcategoria.page';

const routes: Routes = [
  {
    path: '',
    component: MapSubcategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSubcategoriaPageRoutingModule {}
