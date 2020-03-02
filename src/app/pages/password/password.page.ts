import { Component, OnInit } from '@angular/core';
import { VerificacionPasswordPage } from '../verificacion-password/verificacion-password.page';
import { ToastController, ModalController, LoadingController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  celular: any;
  loading: any;
  label = 'medium';

  flag1: boolean; hide1 = true;

  // tslint:disable-next-line: max-line-length
  constructor(private modalCtrl: ModalController, public toastController: ToastController, private dataService: DataService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor espere'
    });
    await this.loading.present();
  }

  dissmissLoading() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  recoverPassword(celular: any) {
    // console.log('Entro a terminos y condiciones');

    if (celular === '' || celular === undefined) {
      this.completo();
      this.label = 'danger';
    } else {
      this.label = 'medium';

      if (celular.length < 10) {
        this.flag1 = false;
        this.hide1 = false;
      } else {
        this.flag1 = true;
        this.hide1 = true;

        this.sendSMS();
      }
    }

  }

  async modal() {
    const modal = await this.modalCtrl.create({
      component: VerificacionPasswordPage,
      componentProps: {
        celular: this.celular
      }
    });

    await modal.present();
  }

  sendSMS() {
    this.presentLoading();

    this.dataService.sendSMS(this.celular)
      .subscribe((data: any) => {

          console.log('success: ' + data.success);
          // this.userData = data; tslint:disable-next-line: triple-equals
          if (data.success == 'TRUE') {
            // this.router2.navigate( ['/dashboard'] ); tslint:disable-next-line:
            console.log('Funciono API Send SMS');
            this.modal();
          } else {
              this.mal(data.description);
              console.log('Error: ' + data.description);
          }

          this.dissmissLoading();
      }, (error) => {
          console.log(error);
          // this.userData = 'Este es el error: ' + error.toString();
          this.mal('Revise su conexión a internet o contacte al administrador');
          this.dissmissLoading();
      });
  }

  async completo() {
    const toast = await this.toastController.create({
      message: 'LLenar todos los campos obligatorio',
      duration: 4000,
      color: 'warning',
      position: 'bottom'
    });
    toast.present();
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'danger',
      position: 'bottom'
    });
    toast.present();
  }

}
