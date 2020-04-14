import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historico-saldo-modal',
  templateUrl: './historico-saldo-modal.page.html',
  styleUrls: ['./historico-saldo-modal.page.scss'],
})
export class HistoricoSaldoModalPage implements OnInit {

  elemento = {} ;
  arrElement = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log('elemento: ', this.elemento);
    this.arrElement = Object.entries(this.elemento).map( (property) => {
      return this.elemento
    })
    console.log(this.arrElement);
    

  }

  cerrar() {
    this.modalCtrl.dismiss()
  }

}
