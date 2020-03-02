import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

import { tap } from 'rxjs/operators';
import { Componente } from '../interfaces/interfaces';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // api = 'http://vayse.mx/dashboard/webservices/';
  // api = 'http://boogapp.mx/vayse/dashboard/webservices/';
   api = 'http://localhost:8888/vayse-web/dashboard/webservices/';
   api1 = 'http://localhost:8000/api/';


  guardados: Registro[] = [];

  // tslint:disable-next-line: max-line-length
  constructor( private http: HttpClient, public toastController: ToastController, private storage: Storage, private navCtrl: NavController) {
    this.cargarStorage();
   }

  async cargarStorage() {
    this.guardados = await this.storage.get('Registros') || [];
  }

  async guardarRegistro(format: any, text: any) {

    await this.cargarStorage();

    const nuevoRegistro = new Registro (format, text);
    this.guardados.unshift(nuevoRegistro);

    console.log(this.guardados);
    this.storage.set('Registros', this.guardados);

    this.abrirRegistro();
  }

  abrirRegistro() {
    this.navCtrl.navigateForward('pago');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
  getElements() {
    return this.http.get<Componente[]>('/assets/data/elementos.json');
  }

  login(correo: string, password: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][login]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'DEV/ws.php?action=login&token=5Nc7C5Mz@Mu&email_usuario=' + correo + '&password_usuario=' + password).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  userPost(correo: string, password: string, nombre: string, celular: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][userPost]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'DEV/ws.php?action=registro&token=5Nc7C5Mz@Mu&email_usuario=' + correo + '&password_usuario=' + password + '&nombre_usuario=' + nombre + '&celular_usuario=' + celular).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  changePassword(celular: string, newPassword: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][changePassword]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api1 + 'usuarios/changePassword?celular=' + celular + '&password=' + newPassword).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  verificarCorreo(correo: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][VerificarCorreo]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'DEV/ws.php?action=verificar&token=5Nc7C5Mz@Mu&email_usuario=' + correo).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  verificarCelular(celular: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][verificarCelular]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api1 + 'usuarios/verificarCel?celular=' + celular).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  // tslint:disable-next-line: max-line-length
  updatePerfil(token: string, id_user: string, nombre: string, apellido: string, edad: string, celular: string, motoCLub: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][userPost]');
    // tslint:disable-next-line: max-line-length
    /* return this.http.get(this.api + 'usuarios/updatePerfil?token=' + token + '&id_user=' + id_user + '&nombre=' + nombre + '&apellido=' + apellido + '&edad=' + edad + '&celular=' + celular + '&motoClub=' + motoCLub).pipe(
      tap( data => {
        console.log(data);
      })
    ); */
    return this.http.get(this.api1 + 'usuarios/updatePerfil?token=5Nc7C5Mz@Mu&id_user=' + id_user + '&nombre=' + nombre + '&apellido=' + apellido + '&edad=' + edad + '&celular=' + celular + '&motoClub=' + motoCLub).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  deleteMoto(token: string, id_user: string, vin: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][userPost]');
    // tslint:disable-next-line: max-line-length
    /* return this.http.get(this.api + 'usuarios/deleteMoto?token=' + token + '&id_user=' + id_user + '&vin=' + vin).pipe(
      tap( data => {
        console.log(data);
      })
    ); */
    return this.http.get(this.api1 + 'usuarios/deleteMoto?token=5Nc7C5Mz@Mu&id_user=' + id_user + '&vin=' + vin).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  getProfile(token: string, id_user: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][getProfile] Data Services');
    // tslint:disable-next-line: max-line-length
    /* return this.http.get(this.api + 'usuarios/getProfile?token=' + token + '&id_user=' + id_user).pipe(
      tap( data => {
        console.log(data);
      })
    ); */
    return this.http.get(this.api1 + 'usuarios/getProfile?token=5Nc7C5Mz@Mu&id_user=' + id_user).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  // se agrega código para obtener el saldo del usuario
  getSaldo(id_user: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][getProfile] Data Services');
    console.log('[DataService][getProfile] ID User: ' + id_user);
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'DEV/ws.php?action=getSaldo&token=5Nc7C5Mz@Mu&id_usuario=' + id_user).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  sendSMS(celular: any) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][verifyCode]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api1 + 'usuarios/enviarsms?celular=' + celular).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  verifyCode(code: any, celular: any) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][verifyCode]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api1 + 'usuarios/verifyCode?code=' + code + '&celular=' + celular).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  // se agrega código solucionando en dashboard la función de this.dataService.getCategorias 
  getCategorias() {
    console.log('[DataService][getCategorias]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'DEV/ws.php?action=get_categorias&token=5Nc7C5Mz@Mu').pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  getSubCategorias(id_categoria: string) {
    console.log('[DataService][getSubCategorias]');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'DEV/ws.php?action=get_subcategorias&token=5Nc7C5Mz@Mu&id_categoria=' + id_categoria).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }
}