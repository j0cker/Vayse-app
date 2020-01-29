import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombre: any; celular: any; user: any;

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: DataService, public toastController: ToastController, private router2: Router, private router: ActivatedRoute) {
    this.router.params
      .subscribe((params: any) => {
          console.log(params);
          this.user = params;
      });
   }

  ngOnInit() {
  }

  register(nombre: any, celular: any) {
    this.dataService.userPost(this.user.correo, this.user.password, nombre, celular)
    .subscribe( (data: any) => {

      console.log('[Register][Register] Data: ' + data);
      console.log('[Register][Register] Reponse: ' + data.response);
      // tslint:disable-next-line: triple-equals
      if (data.response === true) {

        this.router2.navigate( ['/dashboard'] );
        // this.bien();
      } else {
        this.mal(data.message);
      }

    }, ( error ) => {
      console.log(error);
      // this.userData = 'Este es el error: ' + error.toString();
      this.mal(error);
    });
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'danger',
      position: 'bottom',
    });
    toast.present();
  }

}
