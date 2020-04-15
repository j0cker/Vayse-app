import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoSaldoModalPageRoutingModule } from './historico-saldo-modal-routing.module';

import { HistoricoSaldoModalPage } from './historico-saldo-modal.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoSaldoModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoricoSaldoModalPage]
})
export class HistoricoSaldoModalPageModule {}
