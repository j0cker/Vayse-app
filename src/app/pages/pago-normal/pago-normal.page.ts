import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pago-normal',
  templateUrl: './pago-normal.page.html',
  styleUrls: ['./pago-normal.page.scss'],
})
export class PagoNormalPage implements OnInit {

  @Input() idMetodoPago: any;
  @Input() idNegocio: any;
  total: any;

  constructor( private modalCtrl: ModalController, private router: ActivatedRoute, private route: Router ) {
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

}