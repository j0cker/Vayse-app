import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { TextAst } from '@angular/compiler';

@Component({
  selector: 'app-pago-normal',
  templateUrl: './pago-normal.page.html',
  styleUrls: ['./pago-normal.page.scss'],
})
export class PagoNormalPage implements OnInit {

  @Input() idMetodoPago: any;
  @Input() idNegocio: any;
  total: any;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
<<<<<<< HEAD
    private toastController: ToastController 
=======
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36
  ) {
    this.router.params
      .subscribe((params: any) => {
          this.idMetodoPago = params.idMetodoPago;
          this.idNegocio = params.id_negocio;
      });
  }

  ngOnInit() {
  }

  cash() {
    this.route.navigate(['/pago-aprobacion', this.idMetodoPago, this.idNegocio, this.total])
  }

}