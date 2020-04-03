import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.page.html',
  styleUrls: ['./opiniones.page.scss'],
})
export class OpinionesPage implements OnInit {

  id_negocio: any = 42;
  infoOpiniones: any = [];
  
  constructor(
    private dataService: DataService,
    private toastController: ToastController,
    private storage: Storage
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
        this.bien();
      } else {
        this.mal(data.message);
      }
    });
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Queremos saber tu opinión del negocio',
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
