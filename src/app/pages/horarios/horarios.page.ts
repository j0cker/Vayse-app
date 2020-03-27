import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  id_negocio: any = 42;
  infoNegocio: any;
  horaServicios: any = [];
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any[]) => {
      this.infoNegocio = data;
      this.horaServicios = this.infoNegocio.horarios;
      console.log(this.infoNegocio);
      console.log(this.horaServicios);

    }, ( error ) => {
      console.log(error);
    });
    
  }

}
