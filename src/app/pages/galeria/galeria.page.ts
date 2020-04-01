import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  id_negocio: any = 42;
  infoGaleria: any = [];

  constructor(
    private dataService: DataService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any) => {
      if(data.success === 'true' || 'TRUE'){
        this.infoGaleria = data.galeria;
        // console.log('info Galeria: ', this.infoGaleria);
        this.bien()
      } else {
        this.mal(data.message)
      }
    });
    
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Ve nuestro negocio',
      duration: 2000,
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
