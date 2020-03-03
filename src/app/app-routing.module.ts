import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
    path: 'pago',
    loadChildren: () => import('./pages/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'pago-normal',
    loadChildren: () => import('./pages/pago-normal/pago-normal.module').then( m => m.PagoNormalPageModule)
  },
  {
    path: 'pago-puntos',
    loadChildren: () => import('./pages/pago-puntos/pago-puntos.module').then( m => m.PagoPuntosPageModule)
  },
  {
    path: 'pago-aprobacion',
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
    path: 'map-subcategoria',
    loadChildren: () => import('./pages/map-subcategoria/map-subcategoria.module').then( m => m.MapSubcategoriaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
