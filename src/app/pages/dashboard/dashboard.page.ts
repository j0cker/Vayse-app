import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  elementos: any[] = [];
  elemento: any;
  id_user: any;
  saldo: any;
  saldos: any;

  constructor(private dataService: DataService, private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.getID();
    this.getCategorias();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.id_user = val;
      this.getSaldo(this.id_user);
    });
  }

  getSaldo(id_user: any) {
    this.dataService.getSaldo(id_user)
    .subscribe( (data: any[]) => {
      this.saldos = data;
      this.saldo = this.saldos.saldo;
      // console.log(this.saldo);
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

  subCategorias( id_categoria: any ) {
    // console.log(id_categoria);
    this.router.navigate( ['/subcategorias', id_categoria ] );
  }

  /* Hace una actualización general de los datos modificados */
  doRefresh(event) {
    setTimeout(() => {
      this.getID();
      event.target.complete();
    }, 2000);
  }

}