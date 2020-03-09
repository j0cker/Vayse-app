import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  id_user: string;
  id_negocio: any;
  

  constructor( private storage : Storage, private dataService : DataService, private toastController: ToastController, private router : ActivatedRoute ) { 
    this.router.params
      .subscribe((params: any) => {
          console.log(params.id_negocio);
          this.id_negocio = params.id_negocio;
      });
  }

  ngOnInit() {
    this.getID();
  }

  getID(){
    // Or to get a key/value pair
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.id_user = val;
    });
  }

  pagoNormal() {
    this.dataService.negocio(this.id_negocio).subscribe( (data:any) => {

    }, ( error ) => {
      this.mal('console'+ error)
      console.log(error);
      
    })
  }

  pagoPuntos() {
    
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  };

}
