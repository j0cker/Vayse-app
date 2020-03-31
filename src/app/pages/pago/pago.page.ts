import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  idNegocio: any;
  idMetodoPago: any;
  total: any;

  constructor(
    private router: ActivatedRoute, private route: Router
  ) {
    this.router.params
      .subscribe((params: any) => {
          this.idNegocio = params.id_negocio;
      });
  }

  ngOnInit() {
  }

  pagoNormal() {
    this.idMetodoPago = 3;
    this.route.navigate(['/pago-normal', this.idMetodoPago, this.idNegocio]);
  }

  pagoPuntos() {
    this.idMetodoPago = 1;
    this.route.navigate(['/pago-puntos', this.idMetodoPago, this.idNegocio]);
  }

}
