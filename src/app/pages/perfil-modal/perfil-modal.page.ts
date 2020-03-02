import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-modal',
  templateUrl: './perfil-modal.page.html',
  styleUrls: ['./perfil-modal.page.scss'],
})
export class PerfilModalPage implements OnInit {

  nombre: any;
  correo: any;
  celular: any;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
    
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  
  editPerfil(nombre, correo, celular) {
    
  }

}
