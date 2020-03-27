import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id_negocio: any = 42;
  infoNegocio: any;
  // detalles: any = [];

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
      // this.detalles = this.infoNegocio.detalles;

    }, ( error ) => {
      console.log(error);
    });
    
  }
}
