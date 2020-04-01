import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
<<<<<<< HEAD
=======
import { ToastController } from '@ionic/angular';
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.page.html',
  styleUrls: ['./insignias.page.scss'],
})
export class InsigniasPage implements OnInit {

  id_negocio: any = 42;
<<<<<<< HEAD
  infoNegocio: any;
  insignias: any[] = [];

  constructor(
    private dataService: DataService
=======
  infoValoraciones: any;

  constructor(
    private dataService: DataService,
    private toastController: ToastController
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
<<<<<<< HEAD
    .subscribe( (data: any[]) => {
      this.infoNegocio = data;
      this.insignias = this.infoNegocio.valoraciones;
      console.log(this.infoNegocio);
      console.log('insignias: ',this.insignias);

    }, ( error ) => {
      console.log(error);
    });
    
=======
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
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36
  }

}
