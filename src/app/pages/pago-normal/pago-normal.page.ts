import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagoAprobacionPage } from '../pago-aprobacion/pago-aprobacion.page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pago-normal',
  templateUrl: './pago-normal.page.html',
  styleUrls: ['./pago-normal.page.scss'],
})
export class PagoNormalPage implements OnInit {

<<<<<<< HEAD
=======
  @Input() idMetodoPago: any;
>>>>>>> 84bb0dfa8425bede4eae37c98aca2880dbae7779
  total: any;

  constructor( private modalCtrl: ModalController, private router: ActivatedRoute, private route: Router ) {
    this.router.params
      .subscribe((params: any) => {
          console.log(params.idMetodoPago);
          this.idMetodoPago = params.idMetodoPago;
      });
  }

  ngOnInit() {
  }

  async codigo() {
    const modal = await this.modalCtrl.create({
      component: PagoAprobacionPage,
      componentProps: {
<<<<<<< HEAD
        cantidad: this.total
=======
        total: this.total,
        id_metodo_pago: this.idMetodoPago
>>>>>>> 84bb0dfa8425bede4eae37c98aca2880dbae7779
      }
    });
    await modal.present();
  }

}