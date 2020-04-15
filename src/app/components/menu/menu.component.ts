import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( 
    private dataService: DataService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  borrarStorage() {
    this.storage.clear();
  }

}
