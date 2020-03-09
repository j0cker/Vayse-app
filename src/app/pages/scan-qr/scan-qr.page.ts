import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.page.html',
  styleUrls: ['./scan-qr.page.scss'],
})
export class ScanQrPage implements OnInit {

<<<<<<< HEAD
  registro: any;
=======
  id_negocio: any;
>>>>>>> 84bb0dfa8425bede4eae37c98aca2880dbae7779

  constructor(private barcodeScanner: BarcodeScanner, public dataService: DataService, private router: Router ) { }

  ngOnInit() {
  }

  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if ( !barcodeData.cancelled ) {
        this.dataService.guardarRegistro(barcodeData.format, barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
         this.dataService.guardarRegistro('42', 'vayse');
     });
  }

  openRegistro(registro: any) {
    console.log('Registro', registro);
  }

  idMetodoPago() {
    this.dataService.abrirRegistro(this.id_negocio);
  }

}
