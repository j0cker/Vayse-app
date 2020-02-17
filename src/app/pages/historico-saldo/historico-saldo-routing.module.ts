import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoSaldoPage } from './historico-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoSaldoPageRoutingModule {}
