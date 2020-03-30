import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.page.html',
  styleUrls: ['./insignias.page.scss'],
})
export class InsigniasPage implements OnInit {

  id_negocio: any = 42;
  infoValoraciones: any;
  insignias: any = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any[]) => {
      this.infoValoraciones = data;
      this.insignias = this.infoValoraciones.valoraciones;
      console.log('info valoraciones: ', this.infoValoraciones);
      console.log('insignias: ', this.insignias);

    }, ( error ) => {
      console.log(error);
    });
    
  }

}
