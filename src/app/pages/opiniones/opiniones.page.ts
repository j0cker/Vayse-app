import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController, ModalController  } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalopinionPage } from '../modalopinion/modalopinion.page';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.page.html',
  styleUrls: ['./opiniones.page.scss'],
})
export class OpinionesPage implements OnInit {

  id_negocio: any;
  infoOpiniones: any = [];
  
  constructor(
    private dataService: DataService,
    private toastController: ToastController,
    private storage: Storage,
    private modalCtrl: ModalController
  ) { }

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
      if(data.success === 'true' || 'TRUE'){
        this.infoOpiniones = data.opiniones;
        console.log('opiniones: ', this.infoOpiniones);
        if(this.infoOpiniones.length == 0 ) {
          this.mal('No hay opiones para mostrar');
        }
        // this.bien();
      } else {
        this.mal(data.message);
      }
    });
  }

  async modalOpinion() {
    
    const modal = await this.modalCtrl.create({
      component: ModalopinionPage,
      componentProps: {
        idNegocio: this.id_negocio
      }
    });
    await modal.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getID();
      event.target.complete();
    }, 1000);
  }

  /*
  async bien() {
    const toast = await this.toastController.create({
      message: 'Queremos saber tu opinión del negocio',
      duration: 2000,
      color: 'dark',
      position: 'middle'
    });
    toast.present();
  }
  */
  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'middle'
    });
    toast.present();
  }
  

}
