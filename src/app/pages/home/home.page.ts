import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { MenuController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public network: Network, public dialog: Dialogs, private menu: MenuController, private toastController: ToastController) {
    this.network.onDisconnect().subscribe(() => {
      // console.log('network was disconnected :-(');
      this.net('No cuenta con conexion a internet');
    });

    this.network.onConnect().subscribe(() => {
      // console.log('network connected!');
      this.net('Conexion a internet establecida');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      /*setTimeout(() => {
          // console.log('we got a wifi connection, woohoo!');
          this.dialog.alert('we got a network connection, woohoo!');
      }, 3000);*/
    });

  }

  ngOnInit() {
  }

  async net(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
