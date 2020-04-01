import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.page.html',
  styleUrls: ['./tabs-nav.page.scss'],
})
export class TabsNavPage implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  id_negocio: any;

  constructor(
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe( (params: any) => {
      this.id_negocio = params;
      console.log('id negocio: ', this.id_negocio );
    })
  }
>>>>>>> c3d64c90ddef44b92d8ced6d43f4efd102818f36

  ngOnInit() {
  }

}
