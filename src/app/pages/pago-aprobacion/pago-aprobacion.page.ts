import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pago-aprobacion',
  templateUrl: './pago-aprobacion.page.html',
  styleUrls: ['./pago-aprobacion.page.scss'],
})
export class PagoAprobacionPage implements OnInit {

  id_user: string;
  id_negocio: any;
  id_metodo_pago: any;
  total: any;
  codigocomprobacion: any;

  saldos: any;
  saldo_vayse_usado: any;
  

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService,
    private toastController: ToastController,
    private storage: Storage,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.router.params
      .subscribe((params: any) => {
          console.log('idMetodoPago: ', params.idMetodoPago);
          console.log('idNegocio: ', params.id_negocio);
          console.log('total: ', params.total);
          this.id_metodo_pago = params.idMetodoPago;
          this.id_negocio = params.id_negocio;
          this.total = params.total;
      });
  }

  ngOnInit() {
    this.getID();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_usuario').then((val) => {
      this.id_user = val;
      this.getSaldo(this.id_user);
    });
  }

  getSaldo(id_user: string) {
    this.dataService.getSaldo(id_user)
    .subscribe( (data: any[]) => {
      this.saldos = data;
      this.saldo_vayse_usado = this.saldos.saldo;
    }, ( error ) => {
      console.log(error);
    });
  }

  aprobarVenta() {
    {
      this.dataService.aprobarVenta(
        this.id_user, this.id_negocio, this.id_metodo_pago, this.total, this.codigocomprobacion, this.saldo_vayse_usado
      ).subscribe( ( data: any ) => {
        console.log('Data: ', data);
        if( data.response === true){
          this.route.navigate(['/dashboard'])
          this.bien();
        } else {
          this.mal(data.message);
        }
      }, ( error ) => {
        this.mal('Revise su conexión a internet o contacte al administrador');
      });
    }
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Transacción realizada con éxito',
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
