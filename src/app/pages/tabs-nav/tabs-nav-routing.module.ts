import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsNavPage } from './tabs-nav.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'detalles'
  },
  {
    path: '',
    component: TabsNavPage,
    children: [
      {
        path: 'detalles',
        loadChildren: () => import('../detalles/detalles.module').then( m => m.DetallesPageModule),
      },
      {
        path: 'insignias',
        loadChildren: () => import('../insignias/insignias.module').then( m => m.InsigniasPageModule)
      },
      {
        path: 'ubicacion',
        loadChildren: () => import('../map-subcategoria/map-subcategoria.module').then( m => m.MapSubcategoriaPageModule)

      },
      {
        path: 'opiniones',
        loadChildren: () => import('../opiniones/opiniones.module').then( m => m.OpinionesPageModule)
      },
      {
        path: 'horarios',
        loadChildren: () => import('../horarios/horarios.module').then( m => m.HorariosPageModule)
      },
      {
        path: 'galeria',
        loadChildren: () => import('../galeria/galeria.module').then( m => m.GaleriaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsNavPageRoutingModule {}
