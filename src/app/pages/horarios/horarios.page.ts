import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  id_negocio: any = 42;
  infoServicio: any;
  horario: any = [];
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any[]) => {
      this.infoServicio = data;
      this.horario = this.infoServicio.horarios;
      console.log('info servicio: ', this.infoServicio);
      console.log('horario: ', this.horario);

    }, ( error ) => {
      console.log(error);
    });
    
  }

}
