import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-historico-saldo-modal',
  templateUrl: './historico-saldo-modal.page.html',
  styleUrls: ['./historico-saldo-modal.page.scss'],
})
export class HistoricoSaldoModalPage implements OnInit {

  elemento = {} ;
  arrElement = [];

  idMetodoPago: string;
  idStatusPago: string;
  idStatusVenta: string;
  idNegocio: number;
  nombreNegocio: string;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    console.log('object: ', this.elemento);
    this.arrElement.push(this.elemento)
    console.log('array: ', this.arrElement);
    
    if( parseInt(this.arrElement[0].id_metodo_pago) === 1 ) {
      this.idMetodoPago = 'Pago con Vayse Coins';
      console.log('Pago con Vayse Coins');
    } else {
      this.idMetodoPago = 'Pago con efectivo';
      console.log('Pago normal');
    }

    this.negocio()
  }

  negocio() {
    this.idNegocio = this.arrElement[0].id_negocio
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.idNegocio )
    .subscribe( (data: any) => {
      if(data.success === 'true' || 'TRUE') {
        this.nombreNegocio = data.negocios[0].nombre_negocio;
        console.log('info negocios: ', this.nombreNegocio);
      } else {
        console.log('error');
      }
    });
  }

  cerrar() {
    this.modalCtrl.dismiss()
  }

}
