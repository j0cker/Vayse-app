import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
<<<<<<< HEAD
=======
import { ToastController } from '@ionic/angular';
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.page.html',
  styleUrls: ['./opiniones.page.scss'],
})
export class OpinionesPage implements OnInit {

  id_negocio: any = 42;
<<<<<<< HEAD
  infoNegocio: any;
  opiniones: any[] = [];
  
  constructor(
    private dataService: DataService,
    
=======
  infoOpiniones: any = [];
  
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
      this.opiniones = this.infoNegocio.opiniones;
      console.log(this.infoNegocio);
      console.log('opiniones: ',this.opiniones);

    }, ( error ) => {
      console.log(error);
    });
    
=======
    .subscribe( (data: any) => {
      if(data.success === 'true' || 'TRUE'){
        this.infoOpiniones = data.opiniones;
        // console.log('array opiniones: ', this.infoOpiniones);
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
