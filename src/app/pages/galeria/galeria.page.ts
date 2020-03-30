import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  id_negocio: any = 42;
  infoGaleria: any;
  imagenes: any = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any[] ) => {
      // if(data.success === 'true' && 'TRUE' ){
        this.infoGaleria = data;
        this.imagenes = this.infoGaleria.galeria;
        console.log('info Galeria: ', this.infoGaleria);
        console.log('imagenes: ', this.imagenes);

      // }

    }, ( error ) => {
      console.log(error);
    });
    
  }

}
