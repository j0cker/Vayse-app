import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.page.html',
  styleUrls: ['./subcategorias.page.scss'],
})
export class SubcategoriasPage implements OnInit {

  elementos: any [] = [];
  elemento: any;
  id_categoria: string;
  user: any;

  constructor( private dataService: DataService, private router: ActivatedRoute ) {
    this.router.params
      .subscribe((params: any) => {
          console.log(params);
          this.user = params;
      });
   }

  ngOnInit() {
    this.getSubCategorias();
  }

  getSubCategorias() {
    this.dataService.getSubCategorias(this.user.id_categoria)
    .subscribe( (data: any[]) => {
      this.elemento = data;
      this.elementos = this.elemento.subcategorias;
    }, ( error ) => {
      console.log(error);
    });
  }

}
