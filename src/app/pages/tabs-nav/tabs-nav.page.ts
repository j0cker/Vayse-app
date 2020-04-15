import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.page.html',
  styleUrls: ['./tabs-nav.page.scss'],
})
export class TabsNavPage implements OnInit {

  id_negocio: any;

  constructor(
    private router: ActivatedRoute,
    private storage: Storage
  ) { 
    this.router.params.subscribe( (params: any) => {
      this.id_negocio = params.id_negocio;
      console.log('id negocio: ', this.id_negocio );
    });
  }

  ngOnInit() {
    this.pushNegocio()
  }

  pushNegocio() {
    this.storage.set('id_negocio', this.id_negocio );
  }

}
