import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

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
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any) => {
      if(data.success === 'true' || 'TRUE'){
        this.infoOpiniones = data.opiniones;
        // console.log('array opiniones: ', this.infoOpiniones);
        this.bien();
      } else {
        this.mal(data.message)
      }
    });
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Queremos saber tu opinión del negocio',
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
