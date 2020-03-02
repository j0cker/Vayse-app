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
  id_user: any;

  nombre: any; 
  correo: any; 
  celular: any;

  constructor(private dataService: DataService , private modalCtrl: ModalController, private toastController: ToastController, private storage: Storage) { }

  ngOnInit() {
    this.getProfile();
    this.getID();
  }

  getProfile() {
    this.dataService.getProfile(this.token, this.id_usuario)
    .subscribe( (data: any) => {
      console.log('[Login][Entrar] Data: ' + data);
      console.log('[Login][Entrar] Reponse: ' + data.response);
      this.nombre = data.nombre_usuario;
      this.correo = data.email_usuario;    
      // this.userData = data;
      // tslint:disable-next-line: triple-equals
      if (data.response == 'TRUE') {
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
      this.id_user = val;
      this.getProfile();
      console.log(this.id_usuario);
    });
  }

  async  editProfile() {
    const modal = await this.modalCtrl.create({
      component: PerfilModalPage
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

}
