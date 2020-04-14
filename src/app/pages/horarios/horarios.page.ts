import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

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
    private dataService: DataService,
    private storage: Storage
  ) { }

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
