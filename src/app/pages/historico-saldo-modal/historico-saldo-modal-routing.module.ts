import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoSaldoModalPage } from './historico-saldo-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoSaldoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoSaldoModalPageRoutingModule {}
