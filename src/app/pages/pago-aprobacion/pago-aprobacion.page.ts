import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pago-aprobacion',
  templateUrl: './pago-aprobacion.page.html',
  styleUrls: ['./pago-aprobacion.page.scss'],
})
export class PagoAprobacionPage implements OnInit {

  @Input() cantidad: any;
  @Input() codigo: any;

  id_user: string;
  id_negocio: any;
  id_metodo_pago: any;
  total: any;
  codigocomprobacion: any;

  constructor( private modalCtrl: ModalController, private toastController: ToastController, private storage: Storage, private dataService: DataService ) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  pagoAprobado() {
    this.dataService.aprobarVenta(
      this.id_user, this.id_negocio,this.id_metodo_pago,this.total,this.codigocomprobacion
    ).subscribe( (data:any) => {

    }, ( error ) => {
      this.mal('console'+ error)
    })
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  };

}
