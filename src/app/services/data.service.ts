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
<<<<<<< HEAD
  // api = 'http://boogapp.mx/vayse/dashboard/webservices/';
  // api = 'http://localhost:8888/vayse-web/dashboard/webservices/';
  api = 'http://localhost:8000/api/';
=======
  // api1 = 'http://vayse.boogapp.mx/api/';
   api = 'http://localhost/vayse-web/dashboard/webservices/';
   api1 = 'http://localhost:8000/api/';

>>>>>>> 32fce83046f3c71b7ba8de8622bfbece8258f3f2

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

<<<<<<< HEAD
  getProfile(token: string, id_user: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][getProfile] Data Services');
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'usuarios/getProfile?token=' + token + '&id_user=' + id_user).pipe(
=======
  // tslint:disable-next-line: max-line-length
  updatePerfil(id_user: string, nombre: string, correo: string, celular: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][userPost]');
    return this.http.get(this.api1 + 'usuarios/updatePerfil?token=5Nc7C5Mz@Mu&id_user=' + id_user + '&nombre=' + nombre + '&correo=' + correo + '&celular=' + celular).pipe(
>>>>>>> 32fce83046f3c71b7ba8de8622bfbece8258f3f2
      tap( data => {
        console.log(data);
      })
    );
  }

<<<<<<< HEAD
  getSaldo(id_user: string) {
=======
  deleteMoto(token: string, id_user: string, vin: string) {
>>>>>>> 32fce83046f3c71b7ba8de8622bfbece8258f3f2
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][getProfile] Data Services');
    // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
    return this.http.get(this.api + 'DEV/ws.php?action=getSaldo&token=5Nc7C5Mz@Mu&id_usuario=' + id_user).pipe(
=======
    /* return this.http.get(this.api + 'usuarios/deleteMoto?token=' + token + '&id_user=' + id_user + '&vin=' + vin).pipe(
      tap( data => {
        console.log(data);
      })
    ); */
    return this.http.get(this.api1 + 'usuarios/deleteMoto?token=5Nc7C5Mz@Mu&id_user=' + id_user + '&vin=' + vin).pipe(
>>>>>>> 32fce83046f3c71b7ba8de8622bfbece8258f3f2
      tap( data => {
        console.log(data);
      })
    );
  }

  sendSMS(celular: any) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][verifyCode]');
    // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
    return this.http.get(this.api + 'usuarios/enviarsms?celular=' + celular).pipe(
=======
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

  // se agrega código para obtener con una función los negocios
  getNegocios(latitud:any, longitud:any, id_subcategoria:any) {

    console.log('[DataService][getNegocios] Data Services');
    console.log('[DataService][getNegocios] Latitud: ' + latitud);
    console.log('[DataService][getNegocios] Longitud: ' + longitud);
    console.log('[DataService][getNegocios] ]ID Subcategorias: ' + id_subcategoria);
  
    return this.http.get(this.api + 'DEV/ws.php?action=get_negocios&token=5Nc7C5Mz@Mu&latitud=' + latitud + '&longitud=' + longitud + '&id_subcategoria=' + id_subcategoria).pipe(
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
>>>>>>> 32fce83046f3c71b7ba8de8622bfbece8258f3f2
      tap( data => {
        console.log(data);
      })
    );
  }

  verifyCode(code: any, celular: any) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][verifyCode]');
    // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
    return this.http.get(this.api + 'usuarios/verifyCode?code=' + code + '&celular=' + celular).pipe(
=======
    return this.http.get(this.api1 + 'usuarios/enviarsms?celular=' + celular).pipe(
>>>>>>> 32fce83046f3c71b7ba8de8622bfbece8258f3f2
      tap( data => {
        console.log(data);
      })
    );
  }

  getCategorias() {
    console.log('[DataService][getCategorias]');
    // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
=======
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
>>>>>>> 32fce83046f3c71b7ba8de8622bfbece8258f3f2
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

  /* Requerimientos de la base: ID usuario, ID token usuario, ID negocio, ID metodo de pago, total de la venta, código de comprobación */
  idNegocio() {
    
  }

  aprobarVenta(id_user:string, id_negocio:any, id_metodo_pago:any, total:any, codigocomprobacion:any ){
    console.log('user: ', id_user);
    console.log('negocio: ', id_negocio);
    console.log('metodo pago: ', id_metodo_pago);
    console.log('total: ', total);
    console.log('codigo comprobación: ', codigocomprobacion);

    return this.http.get(
      this.api + 'DEV/ws.php?action=aprobar_venta&token=5Nc7C5Mz@Mu&id_usuario='+ id_user +'&id_negocio='+ id_negocio +'&id_metodo_pago='+ id_metodo_pago +'&total='+ total +'&codigocomprobacion='+ codigocomprobacion
    ).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }
    
}