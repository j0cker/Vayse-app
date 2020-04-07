import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PopoverController, ToastController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-popopinion',
  templateUrl: './popopinion.component.html',
  styleUrls: ['./popopinion.component.scss'],
})
export class PopopinionComponent implements OnInit {

  idUsuario: any;
  idNegocio: any;
  newOpinion: string;

  constructor(
    private storage: Storage,
    private popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    private dataService: DataService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getID();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_negocio').then((val) => {
      console.log('ID Negocio: ', val);
      this.idNegocio = val;
    });
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.idUsuario = val;
    });
  }

  pushOpinion() {
    console.log('opinion: ', this.newOpinion);
    /*
    this.dataService.pushOpinion( this.idNegocio, this.idUsuario, this.opinion )
    .subscribe( (data: any) => {
      if (data.success === 'true' || 'TRUE') {
        console.log('opinion: ', this.opinion);
        this.popoverCtrl.dismiss()
        this.bien();
      } else {
        this.mal(data.message)
      }
    });
    */
  }

  cerrar() {
    this.popoverCtrl.dismiss()
  }

  async bien() {
    const toast = await this.toastCtrl.create({
      message: 'Gracias por tu opinión',
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

  async mal(msj: any) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
