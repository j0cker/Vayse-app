import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-popinsignia',
  templateUrl: './popinsignia.component.html',
  styleUrls: ['./popinsignia.component.scss'],
})
export class PopinsigniaComponent implements OnInit {

  idNegocio: any;
  idUsuario: any;
  rating: any;

  constructor(
    private storage: Storage,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getID();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_negocio').then((val) => {
      console.log('ID Negocio: ', val);
      this.idNegocio = val;
    });
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.idUsuario = val;
    });
  }

  pushValoracion() {
    this.dataService.pushValoracion( this.idNegocio, this.idUsuario, this.rating )
    console.log('This valoracion: ');
  }

}
