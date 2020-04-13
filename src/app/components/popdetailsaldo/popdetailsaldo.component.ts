import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popdetailsaldo',
  templateUrl: './popdetailsaldo.component.html',
  styleUrls: ['./popdetailsaldo.component.scss'],
})
export class PopdetailsaldoComponent implements OnInit {

  detalles: any = [];

  constructor() { }

  ngOnInit() {
    console.log(this.detalles);
    
  }

}

