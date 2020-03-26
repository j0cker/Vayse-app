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

  constructor(private barcodeScanner: BarcodeScanner, public dataService: DataService, private router: Router ) { }

  ngOnInit() {
    this.scanQR();
  }

  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if ( !barcodeData.cancelled ) {
        this.dataService.guardarRegistro(barcodeData.format, barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
         // this.dataService.guardarRegistro('html', 'http://boogapp.mx');
     });
  }

  abrirRegistro(registro: any) {
    console.log('Registro', registro);
  }

  idMetodoPago() {
    this.router.navigate( ['/pago', ] );
  }

}
