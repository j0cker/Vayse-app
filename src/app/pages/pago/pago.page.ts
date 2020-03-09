import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';

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
    private dataService: DataService, private toastController: ToastController, private router: ActivatedRoute, private route: Router
  ) {
    this.router.params
      .subscribe((params: any) => {
          console.log(params.id_negocio);
          this.idNegocio = params.id_negocio;
      });
  }

  ngOnInit() {
  }

  pagoNormal() {
    this.idMetodoPago = 3;
    this.route.navigate(['/pago-normal', this.idMetodoPago]);
    console.log(this.idMetodoPago);
  }

  pagoPuntos() {
    this.idMetodoPago = 1;
    this.route.navigate(['/pago-normal', this.idMetodoPago]);
    console.log(this.idMetodoPago);
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
