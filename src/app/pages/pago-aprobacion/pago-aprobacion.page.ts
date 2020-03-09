import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
<<<<<<< HEAD
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data.service';
=======
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
>>>>>>> 84bb0dfa8425bede4eae37c98aca2880dbae7779

@Component({
  selector: 'app-pago-aprobacion',
  templateUrl: './pago-aprobacion.page.html',
  styleUrls: ['./pago-aprobacion.page.scss'],
})
export class PagoAprobacionPage implements OnInit {

<<<<<<< HEAD
  @Input() cantidad: any;
  @Input() codigo: any;

  id_user: string;
  id_negocio: any;
  id_metodo_pago: any;
  total: any;
  codigocomprobacion: any;

  constructor( private modalCtrl: ModalController, private toastController: ToastController, private storage: Storage, private dataService: DataService ) { }
=======
  id_user: string;
  id_negocio: any;
  id_metodo_pago: any;
  @Input() total: any;
  @Input() codigocomprobacion: any;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService,
    private toastController: ToastController,
    private storage: Storage,
  ) { }
>>>>>>> 84bb0dfa8425bede4eae37c98aca2880dbae7779

  ngOnInit() {
    this.getID();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

<<<<<<< HEAD
  pagoAprobado() {
    this.dataService.aprobarVenta(
      this.id_user, this.id_negocio,this.id_metodo_pago,this.total,this.codigocomprobacion
    ).subscribe( (data:any) => {

    }, ( error ) => {
      this.mal('console'+ error)
    })
=======
  getID() {
    // Or to get a key/value pair
    this.storage.get('id_usuario').then((val) => {
      /* console.log('ID Usuario: ', val); */
      this.id_user = val;
    });
  }

  aprobarVenta() {
    {
      this.dataService.aprobarVenta(
        this.id_user, this.id_negocio, this.id_metodo_pago, this.total, this.codigocomprobacion
      ).subscribe( ( data: any ) => {
        console.log('Data: ' + data);
      }, ( error ) => {
        this.mal('console ' + error );
      });
    }
>>>>>>> 84bb0dfa8425bede4eae37c98aca2880dbae7779
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 84bb0dfa8425bede4eae37c98aca2880dbae7779

}
