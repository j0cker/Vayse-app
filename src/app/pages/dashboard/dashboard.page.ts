import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  elementos: any[] = [];
  elemento: any;
  id_user: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.getCategorias();
  }

  getSaldo() {
    this.dataService.getSaldo(this.id_user)
    .subscribe( (data: any[]) => {
      this.elemento = data;
      this.elementos = this.elemento.categorias;
    }, ( error ) => {
      console.log(error);
    });
  }

  getCategorias() {
    this.dataService.getCategorias()
    .subscribe( (data: any[]) => {
      this.elemento = data;
      this.elementos = this.elemento.categorias;
    }, ( error ) => {
      console.log(error);
    });
  }

}
