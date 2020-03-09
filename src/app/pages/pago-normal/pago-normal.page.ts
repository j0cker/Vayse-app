import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagoAprobacionPage } from '../pago-aprobacion/pago-aprobacion.page';

@Component({
  selector: 'app-pago-normal',
  templateUrl: './pago-normal.page.html',
  styleUrls: ['./pago-normal.page.scss'],
})
export class PagoNormalPage implements OnInit {

  total: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async codigo() {
    const modal = await this.modalCtrl.create({
      component: PagoAprobacionPage,
      componentProps: {
        cantidad: this.total
      }
    });

    await modal.present();
  }

}