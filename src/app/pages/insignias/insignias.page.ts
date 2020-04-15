import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastController, PopoverController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PopinsigniaComponent } from '../../components/popinsignia/popinsignia.component';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.page.html',
  styleUrls: ['./insignias.page.scss'],
})
export class InsigniasPage implements OnInit {

  id_negocio: any;
  infoValoraciones: any;

  rates: any;
  suma: number;
  promGeneral: any;
  unDecimal: any;

  constructor(
    private dataService: DataService,
    private toastController: ToastController,
    private storage: Storage,
    private popoverCtrl: PopoverController
  ) {
    /*
    this.router.params.subscribe( (data: any) => {
      this.id_negocio = data;
      console.log('negocio: ', this.id_negocio);
    });
    */
  }

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

    console.log("[InsigniasPage][getInfoNegocios]");

    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any) => {
      if (data.success === 'true' || 'TRUE'){
        this.infoValoraciones = data.valoraciones;
        this.rates = this.infoValoraciones.map( rate => {
          let arrRating = []
          arrRating = rate.rating
          return arrRating
        })

        console.log(this.rates);
        
        //suma del arreglo de valoraciones
        this.suma = this.rates.reduce( (total, cValue) => {
          let int = parseInt(cValue)
          console.log('[InsigniasPage][getInfoNegocios] total: ', total, 'int: ', int);
          return total + int
        }, 0)
        
        console.log('[InsigniasPage][getInfoNegocios] suma: ', this.suma);
        
        console.log("[InsigniasPage][getInfoNegocios] unDecimal: " + this.unDecimal);

        if (this.suma==0) {

          this.unDecimal = 0;
          this.mal('No hay valoraciones para mostrar')

        } else {
          
          console.log('[InsigniasPage][getInfoNegocios] hacemos la operación de divisón');

          this.promGeneral = this.suma / this.rates.length

          this.unDecimal = this.promGeneral.toFixed(1)
        }

        console.log('[InsigniasPage][getInfoNegocios] promGeneral: ', this.promGeneral);
        console.log('[InsigniasPage][getInfoNegocios] unDecimal: ', this.unDecimal);
        console.log('[InsigniasPage][getInfoNegocios] info valoraciones: ', this.infoValoraciones);
        
        // this.bien();
      } else {
        this.mal(data.message);
      }
    });
  }
  
  async popoverValoracion( ) {

    const popover = await this.popoverCtrl.create({
      component: PopinsigniaComponent,
      backdropDismiss: false,
    });
    await popover.present();
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
      message: 'Deseamos saber tu valoración',
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
