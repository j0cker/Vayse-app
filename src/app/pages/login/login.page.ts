import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { MenuController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: any;
  password: any;

  constructor(private dataService: DataService, public toastController: ToastController, private router: Router, private storage: Storage) {
  }

  ngOnInit() {
  }

  entrar(correo: any, password: any) {
    console.log('Email: ' + correo);
    console.log('Password: ' + password);
    const esMail = this.isEmail(correo);
    if (esMail === true) {
      this.dataService.login(correo, password)
      .subscribe( (data: any) => {
        console.log('[Login][Entrar] Data: ' + data);
        console.log('[Login][Entrar] Reponse: ' + data.response);
        // this.userData = data;
        // tslint:disable-next-line: triple-equals
        if (data.response == true) {
          // console.log('[Login][Entrar] Token: ' + data.token);
          // console.log('[Login][Entrar] Usuario: ' + data.data[0].id_usuarios);
          // localStorage.setItem('idUsuario', data.data[0].id_usuarios);
          // localStorage.setItem('Token', data.token);
          this.correo = '';
          this.password = '';
          this.storage.set('id_usuario', data.id_usuario);
          this.router.navigate( ['/dashboard'] );
          // this.bien();
        } else {
          this.mal(data.message);
        }
      }, ( error ) => {
        console.log(`El error es: ${error}`);
        // this.userData = 'Este es el error: ' + error.toString();
        this.mal(error);
      });
    } else {
      this.mail();
    }
  }

  isEmail(correo: any): boolean {
    let  serchfind: boolean;
    let regexp: any;
    // tslint:disable-next-line: max-line-length
    regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    serchfind = regexp.test(correo);

    console.log(serchfind);
    return serchfind;
  }

  async bien() {
    const toast = await this.toastController.create({
      message: 'Sesión iniciada',
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

  async mail() {
    const toast = await this.toastController.create({
      message: 'Ingresar un correo válido',
      duration: 4000,
      color: 'danger',
      position: 'bottom',
    });
    toast.present();
  }

}
