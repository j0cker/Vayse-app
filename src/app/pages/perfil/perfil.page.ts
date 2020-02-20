import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  acount: [
    {
      name: 'Josue Xicotencatl Avalos',
      iniciales: 'JX',
      correo: 'josue@boogapp.mx',
      celular: '5555555555'   
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
