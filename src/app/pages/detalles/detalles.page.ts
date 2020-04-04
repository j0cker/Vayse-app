import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id_negocio: any;
  infoDetalles: any;
  promociones: any;
  valoraciones: any;

  constructor(
    private dataService: DataService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getID()
  }

  getID() {
    this.storage.get('id_negocio').then((val) => {
      console.log('ID Negocio: ', val);
      this.id_negocio = val;
      this.getInfoNegocios();
      this.getPromociones();
    });
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any) => {
      if(data.success === 'true' || 'TRUE') {
        this.infoDetalles = data.negocios;
        this.valoraciones = data.valoraciones.length;
        console.log('info negocios: ', this.infoDetalles);
        console.log('valoraciones: ', this.valoraciones);
        // this.bien()
      } else {
        // this.mal(data.message)
      }
    });
  }

  getPromociones(){
    this.dataService.getPromociones( this.id_negocio )
      .subscribe( (data: any) => {
        if(data.success === 'true' || 'TRUE') {
          this.promociones = data.message;
          console.log('promos: ', this.promociones);
          // this.bien();
        } else {
          console.log('mal');
          // this.mal(data.message)
        }
      });
  }
  
}
