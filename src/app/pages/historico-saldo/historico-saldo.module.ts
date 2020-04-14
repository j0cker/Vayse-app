import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoSaldoPageRoutingModule } from './historico-saldo-routing.module';

import { HistoricoSaldoPage } from './historico-saldo.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HistoricoSaldoModalPage } from '../historico-saldo-modal/historico-saldo-modal.page';
import { HistoricoSaldoModalPageModule } from '../historico-saldo-modal/historico-saldo-modal.module';

@NgModule({
  entryComponents: [
    HistoricoSaldoModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoSaldoPageRoutingModule,
    ComponentsModule,
    HistoricoSaldoModalPageModule
  ],
  declarations: [HistoricoSaldoPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HistoricoSaldoPageModule {}
