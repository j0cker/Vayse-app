import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pago-puntos',
  templateUrl: './pago-puntos.page.html',
  styleUrls: ['./pago-puntos.page.scss'],
})
export class PagoPuntosPage implements OnInit {

  @Input() idMetodoPago: any;
  @Input() idNegocio: any;
  total: number;

  id_user: string;
  saldos: any;
  saldo_vayse_usado: any;
  saldo: any;
  
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private toastController: ToastController,
    private dataService: DataService,
    private storage: Storage
  ) {
    this.router.params
      .subscribe((params: any) => {
          this.idMetodoPago = params.idMetodoPago;
          this.idNegocio = params.id_negocio;
      });
  }

  ngOnInit() {
    this.getID();
  }
  
  getID() {
    this.storage.get('id_usuario').then((val) => {
      this.id_user = val;
      this.getSaldo(this.id_user);
    });
  }

  getSaldo(id_user: string) {
    this.dataService.getSaldo(id_user)
    .subscribe( (data: any[]) => {
      this.saldos = data;
      this.saldo_vayse_usado = this.saldos.saldo;
    }, ( error ) => {
      console.log(error);
    });
  }

  puntos() {
    this.dataService.getSaldo(this.id_user)
    .subscribe( (data: any ) => {
      if( data.response === true && this.total <= this.saldo_vayse_usado ) {          
        this.bien();
        this.route.navigate(['/pago-aprobacion', this.idMetodoPago, this.idNegocio, this.total])
      } else {
        this.mal('No tienes puntos suficientes');
      }
    });
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Tienes puntos suficientes',
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
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
