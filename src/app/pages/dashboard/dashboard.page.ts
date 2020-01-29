import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  elementos: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getElements()
    .subscribe( (data: any[]) => {
      this.elementos = data;

    }, ( error ) => {
      console.log(error);
    });
  }

}
