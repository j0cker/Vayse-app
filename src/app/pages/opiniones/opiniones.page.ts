import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.page.html',
  styleUrls: ['./opiniones.page.scss'],
})
export class OpinionesPage implements OnInit {

  id_negocio: any = 42;
  infoNegocio: any;
  opiniones: any = [];
  
  constructor(
    private dataService: DataService,
    
  ) { }

  ngOnInit() {
    this.getInfoNegocios();
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any[]) => {
      this.infoNegocio = data;
      this.opiniones = this.infoNegocio.opiniones;
      console.log(this.infoNegocio);
      console.log('opiniones: ', this.opiniones);

    }, ( error ) => {
      console.log(error);
    });
    
  }

}
