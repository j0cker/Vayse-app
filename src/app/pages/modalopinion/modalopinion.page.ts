import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modalopinion',
  templateUrl: './modalopinion.page.html',
  styleUrls: ['./modalopinion.page.scss'],
})
export class ModalopinionPage implements OnInit {

  idUsuario: any;
  idNegocio: any;
  newOpinion: any;

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController,
    private dataService: DataService,
    private modalCtrl: ModalController
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
    this.dataService.pushOpinion( this.idNegocio, this.idUsuario, this.newOpinion )
    .subscribe( (data: any) => {
      if (data.success === 'true' || 'TRUE') {
        console.log('opinion: ', this.newOpinion);
        this.modalCtrl.dismiss()
        this.bien();
      } else {
        this.mal(data.message)
      }
    });
  }

  cerrar() {
    this.modalCtrl.dismiss()
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
