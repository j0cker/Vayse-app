import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagoAprobacionPage } from '../pago-aprobacion/pago-aprobacion.page';

@Component({
  selector: 'app-pago-puntos',
  templateUrl: './pago-puntos.page.html',
  styleUrls: ['./pago-puntos.page.scss'],
})
export class PagoPuntosPage implements OnInit {

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
