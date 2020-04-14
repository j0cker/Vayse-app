import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ModalController } from '@ionic/angular';
import { HistoricoSaldoModalPage } from '../historico-saldo-modal/historico-saldo-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-historico-saldo',
  templateUrl: './historico-saldo.page.html',
  styleUrls: ['./historico-saldo.page.scss'],
})
export class HistoricoSaldoPage implements OnInit {

  id_user: any;
  historicoVentas = [];

  idVenta: any;
  total: any;
  fechaVenta: any;
  horaVenta: any;
  idMetodoPaog: any;
  saldoVayseUsado: any;
  saldoVayseGanado: any;
  idStatusVenta: any;



  constructor(
    public dataService: DataService,
    private modalCtrl: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.getID();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.id_user = val;
      this.getHistorico();
    });
  }

  getHistorico() {
    this.dataService.getHistoricoVenta( this.id_user )
    .subscribe( (data: any) => {
      if (data.success === 'true' || 'TRUE') {
        this.historicoVentas = data.historico
        console.log('historico: ', this.historicoVentas);
      } else {
        console.log('error');
      }
    });
  }

  async modalRegistro(indexArr) {
    console.log('index arr: ', indexArr);
    const modal = await this.modalCtrl.create({
      component: HistoricoSaldoModalPage,
      componentProps: {
        elemento: this.historicoVentas[indexArr]
      }
    });
    await modal.present();
  }

}
