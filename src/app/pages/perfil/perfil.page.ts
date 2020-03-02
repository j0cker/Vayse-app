import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  id_usuario: any;
  token: any;

  dataPerfil: any;
  nombreUsuario: any;
  correoUsuario: any;
  celularUsuario: any;  

  constructor(private dataService: DataService , private modalCtrl: ModalController, private toastController: ToastController, private storage: Storage) { }

  ngOnInit() {
    this.getID();
  }

  getProfile() {
    this.dataService.getProfile(this.token, this.id_usuario)
    .subscribe( (data: any) => {
      console.log('[Login][Entrar] Data: ' + data);
      console.log('[Login][Entrar] Reponse: ' + data.success);
      this.dataPerfil = data.data[0];
      this.nombreUsuario = this.dataPerfil.nombre_usuario;
      this.correoUsuario = this.dataPerfil.email_usuario;
      this.celularUsuario = this.dataPerfil.celular_usuario;
      
      // this.userData = data;
      // tslint:disable-next-line: triple-equals
      if (data.success == 'TRUE') {
        // console.log('[Login][Entrar] Token: ' + data.token);
        // console.log('[Login][Entrar] Usuario: ' + data.data[0].id_usuarios);
        // localStorage.setItem('idUsuario', data.data[0].id_usuarios);
        // localStorage.setItem('Token', data.token);
        // this.bien();
      } else {
        // this.mal(data.message);
      }
    }, ( error ) => {
      console.log(error);
      // this.userData = 'Este es el error: ' + error.toString();
      this.mal(`console ${error}`);
    });
  }
  
  getID(){
    // Or to get a key/value pair
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.id_usuario = val;
      this.getProfile();
      console.log(this.id_usuario);
    });
  }

  async  editProfile() {
    const modal = await this.modalCtrl.create({
      component: PerfilModalPage,
      componentProps: {
        nombre: this.dataPerfil.nombre_usuario,
        correo: this.dataPerfil.email_usuario,
        celular: this.dataPerfil.celular_usuario,        
      }
    });
  
    await modal.present();
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  };
  
  doRefresh(event) {
    setTimeout(() => {
      this.getID();
      event.target.complete();
    }, 2000);
  }

}
