import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  id_user: string;
  id_negocio: any;
  id_metodo_pago: any;
  total: any;
  codigocomprobacion: any;

  constructor( private dataService : DataService, private toastController: ToastController, private router : ActivatedRoute ) { 
    this.router.params
      .subscribe((params: any) => {
          console.log(params);
          this.id_metodo_pago = params;
      });
  }

  ngOnInit() {
  }

  getNegocios() {
    
  }

  pagoNormal() {
    this.dataService.aprobarVenta(
      this.id_user, this.id_negocio,this.id_metodo_pago,this.total,this.codigocomprobacion
    ).subscribe( (data:any) => {

    }, ( error ) => {
      this.mal('console'+ error)
    })
  }

  pagoPuntos() {
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
