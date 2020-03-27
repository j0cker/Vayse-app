import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  id_negocio: any = 42;
  infoNegocio: any;
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
      this.infoNegocio = data;
      this.imagenes = this.infoNegocio.galeria;
      console.log(this.infoNegocio);
      console.log(this.imagenes);

    }, ( error ) => {
      console.log(error);
    });
    
  }

}
