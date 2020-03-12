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

  scan: any;

  constructor( private barcodeScanner: BarcodeScanner, public dataService: DataService, private router: Router ) { }

  ngOnInit() {
    this.scanQR();
  }

  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scan = JSON.parse(barcodeData.text);
      if ( !barcodeData.cancelled ) {
        this.dataService.guardarRegistro(this.scan.id_negocio, this.scan.property);
      }
     }).catch(err => {
         console.log('Error', err);
         /* this.dataService.guardarRegistro('42', 'vayse');  // esta línea es harcodeada para probar con ionic serve*/
     });
  }

  idMetodoPago() {
    this.router.navigate( ['/pago', ] );
  }

}

