import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsNavPage } from './tabs-nav.page';

const routes: Routes = [
  {
    path: '',
    component: TabsNavPage,
    children: [
      {
        path: 'detalles',
        children: [
          {
            path: '',
            loadChildren: '../detalles/detalles.module#DetallesPageModule',
          }
        ]
      },
      {
        path: 'insignias',
        children: [
          {
            path: '',
            loadChildren: '../insignias/insignias.module#InsigniasPageModule',
          }
        ]
      },
      {
        path: 'ubicacion',
        children: [
          {
            path: '',
            loadChildren: '../map-subcategoria/map-subcategoria.module#MapSubcategoriaPageModule',
          }
        ]
      },
      {
        path: 'opiniones',
        children: [
          {
            path: '',
            loadChildren: '../opiniones/opiniones.module#OpinionesPageModule',
          }
        ]
      },
      {
        path: 'horarios',
        children: [
          {
            path: '',
            loadChildren: '../horarios/horarios.module#HorariosPageModule',
          }
        ]
      },
      {
        path: 'galeria',
        children: [
          {
            path: '',
            loadChildren: '../galeria/galeria.module#GaleriaPageModule',
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsNavPageRoutingModule {}
