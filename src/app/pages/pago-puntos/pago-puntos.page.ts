import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-puntos',
  templateUrl: './pago-puntos.page.html',
  styleUrls: ['./pago-puntos.page.scss'],
})
export class PagoPuntosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* La ruta para aprobar la venta es este
  {
    this.dataService.aprobarVenta(
      this.id_user, this.id_negocio, this.id_metodo_pago, this.total, this.codigocomprobacion
    ).subscribe( ( data: any ) => {

    }, ( error ) => {
      this.mal('console' + error );
    });
  }
*/
