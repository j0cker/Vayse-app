import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PopoverController } from '@ionic/angular';
import { PopdetailsaldoComponent } from 'src/app/components/popdetailsaldo/popdetailsaldo.component';

@Component({
  selector: 'app-historico-saldo',
  templateUrl: './historico-saldo.page.html',
  styleUrls: ['./historico-saldo.page.scss'],
})
export class HistoricoSaldoPage implements OnInit {

  constructor(
    public dataService: DataService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async popoverRegistro(registro: any = []) {
    const popover = await this.popoverCtrl.create({
      component: PopdetailsaldoComponent,
      componentProps: {
        detalles: registro
      }
    });
    console.log(registro);
    
    await popover.present();
  }

}
