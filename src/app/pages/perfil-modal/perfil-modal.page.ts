import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-modal',
  templateUrl: './perfil-modal.page.html',
  styleUrls: ['./perfil-modal.page.scss'],
})
export class PerfilModalPage implements OnInit {

  @Input() nombre: any;
  @Input() correo: any;
  @Input() celular: any;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
    
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  
  editPerfil(nombre, correo, celular) {
    
  }

}
