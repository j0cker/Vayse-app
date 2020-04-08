import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-modal',
  templateUrl: './perfil-modal.page.html',
  styleUrls: ['./perfil-modal.page.scss'],
})
export class PerfilModalPage implements OnInit {

  @Input() nombre: any;
  @Input() correo: any;
  @Input() celular: any;

  id_usuario: any;

  constructor( 
    private modalCtrl: ModalController,
    private storage: Storage,
    private dataService: DataService,
    private toastController: ToastController,
    private route: Router
  ) { }

  ngOnInit() {
    this.getID();
    
  }
  
  editPerfil(nombre, correo, celular) {
    const esMail = this.isEmail(correo);
    if(esMail === true) { 
      this.dataService.updatePerfil(this.id_usuario, this.nombre, this.correo, this.celular)
      .subscribe( (data: any) => {
        if (data.success == 'TRUE') {
          this.bien();
          this.cerrarModal();
        } else {
          this.mal();
        }
      }, ( error ) => {
        console.log('error ', error);      
      })
    } else {
      this.mail();
    }
  }

  changePas() {
    this.route.navigate(['/recover-password',  this.celular])
    this.cerrarModal();
  }
  
  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  getID(){
    // Or to get a key/value pair
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.id_usuario = val;
      console.log(this.id_usuario);
    });
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
      message: 'Perfil actualizado con éxito',
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  };

  async mal() {
    const toast = await this.toastController.create({
      message: 'Error al actualizar',
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  };

  async mail() {
    const toast = await this.toastController.create({
      message: 'Ingresar un correo válido',
      duration: 4000,
      color: 'dark',
      position: 'bottom',
    });
    toast.present();
  }

}
