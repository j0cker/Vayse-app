import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-historico-saldo',
  templateUrl: './historico-saldo.page.html',
  styleUrls: ['./historico-saldo.page.scss'],
})
export class HistoricoSaldoPage implements OnInit {

  constructor(public dataService: DataService ) { }

  ngOnInit() {
  }

  abrirRegistro(registro: any) {
    console.log('Registro', registro);
  }

}
