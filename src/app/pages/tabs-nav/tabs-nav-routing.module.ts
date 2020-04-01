import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsNavPage } from './tabs-nav.page';

const routes: Routes = [
  {
    path: '',
    component: TabsNavPage,
    children: [
      {
<<<<<<< HEAD
=======
        path: '',
        children: [
          {
            path: '',
            loadChildren: '',
          }
        ]
      },
      {
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36
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
