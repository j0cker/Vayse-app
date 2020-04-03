import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.page.html',
  styleUrls: ['./insignias.page.scss'],
})
export class InsigniasPage implements OnInit {

  id_negocio: any;
  infoValoraciones: any;

  constructor(
    private dataService: DataService,
    private toastController: ToastController,
    private storage: Storage
  ) {
    /*
    this.router.params.subscribe( (data: any) => {
      this.id_negocio = data;
      console.log('negocio: ', this.id_negocio);
    });
    */
  }

  ngOnInit() {
    this.getID();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_negocio').then((val) => {
      console.log('ID Negocio: ', val);
      this.id_negocio = val;
      this.getInfoNegocios();
    });
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any) => {
      if (data.success === 'true' || 'TRUE'){
        this.infoValoraciones = data.valoraciones;
        console.log('info valoraciones: ', this.infoValoraciones);
        this.bien();
      } else {
        this.mal(data.message);
      }
    });
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Deseamos saber tu valoración',
      duration: 2000,
      color: 'dark',
      position: 'middle'
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
