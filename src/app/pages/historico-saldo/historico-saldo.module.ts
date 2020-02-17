import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoSaldoPageRoutingModule } from './historico-saldo-routing.module';

import { HistoricoSaldoPage } from './historico-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoSaldoPageRoutingModule
  ],
  declarations: [HistoricoSaldoPage]
})
export class HistoricoSaldoPageModule {}
