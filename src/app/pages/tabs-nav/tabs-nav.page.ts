import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.page.html',
  styleUrls: ['./tabs-nav.page.scss'],
})
export class TabsNavPage implements OnInit {

  id_negocio: any;

  constructor(
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe( (params: any) => {
      this.id_negocio = params;
      console.log('id negocio: ', this.id_negocio );
    })
  }

  ngOnInit() {
  }

}
