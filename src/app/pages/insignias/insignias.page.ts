import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.page.html',
  styleUrls: ['./insignias.page.scss'],
})
export class InsigniasPage implements OnInit {

  id_negocio: any = 42;
  infoValoraciones: any;

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
