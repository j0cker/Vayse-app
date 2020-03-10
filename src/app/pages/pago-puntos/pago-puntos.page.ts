import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pago-puntos',
  templateUrl: './pago-puntos.page.html',
  styleUrls: ['./pago-puntos.page.scss'],
})
export class PagoPuntosPage implements OnInit {

  @Input() idMetodoPago: any;
  @Input() idNegocio: any;
  total: any;
  
  constructor(
    private modalCtrl: ModalController,
    private router: ActivatedRoute,
    private route: Router,
    private dataService: DataService,
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.router.params
      .subscribe((params: any) => {
          this.idMetodoPago = params.idMetodoPago;
          this.idNegocio = params.id_negocio;
      });
  }

  ngOnInit() {
  }

  codigo() {
    this.route.navigate(['/pago-aprobacion', this.idMetodoPago, this.idNegocio, this.total])
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
