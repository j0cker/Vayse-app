import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pago-aprobacion',
  templateUrl: './pago-aprobacion.page.html',
  styleUrls: ['./pago-aprobacion.page.scss'],
})
export class PagoAprobacionPage implements OnInit {

  @Input() cantidad: any;
  codigo: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
