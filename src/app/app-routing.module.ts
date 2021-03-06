import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'tabs-nav', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'verificacion-password',
    loadChildren: () => import('./pages/verificacion-password/verificacion-password.module').then( m => m.VerificacionPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./pages/scan-qr/scan-qr.module').then( m => m.ScanQrPageModule)
  },
  {
    path: 'register/:correo/:password',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'historico-saldo',
    loadChildren: () => import('./pages/historico-saldo/historico-saldo.module').then( m => m.HistoricoSaldoPageModule)
  },
  {
    path: 'pago/:id_negocio',
    loadChildren: () => import('./pages/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'pago-normal/:idMetodoPago/:id_negocio',
    loadChildren: () => import('./pages/pago-normal/pago-normal.module').then( m => m.PagoNormalPageModule)
  },
  {
    path: 'pago-puntos/:idMetodoPago/:id_negocio',
    loadChildren: () => import('./pages/pago-puntos/pago-puntos.module').then( m => m.PagoPuntosPageModule)
  },
  {
    path: 'pago-aprobacion/:idMetodoPago/:id_negocio/:total',
    loadChildren: () => import('./pages/pago-aprobacion/pago-aprobacion.module').then( m => m.PagoAprobacionPageModule)
  },
  {
    path: 'perfil-modal',
    loadChildren: () => import('./pages/perfil-modal/perfil-modal.module').then( m => m.PerfilModalPageModule)
  },
  {
    path: 'subcategorias/:id_categoria',
    loadChildren: () => import('./pages/subcategorias/subcategorias.module').then( m => m.SubcategoriasPageModule)
  },
  {
    path: 'map-subcategoria/:id_subcategoria',
    loadChildren: () => import('./pages/map-subcategoria/map-subcategoria.module').then( m => m.MapSubcategoriaPageModule)
  },
  {
    path: 'tabs-nav',
    loadChildren: () => import('./pages/tabs-nav/tabs-nav.module').then( m => m.TabsNavPageModule)
  },  {
    path: 'detalles',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'insignias',
    loadChildren: () => import('./pages/insignias/insignias.module').then( m => m.InsigniasPageModule)
  },
  {
    path: 'horarios',
    loadChildren: () => import('./pages/horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'opiniones',
    loadChildren: () => import('./pages/opiniones/opiniones.module').then( m => m.OpinionesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
