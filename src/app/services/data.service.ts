import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

import { tap } from 'rxjs/operators';
import { Componente } from '../interfaces/interfaces';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api = 'http://vayse.mx/dashboard/webservices/';
  api1 = 'http://api.vayse.mx/api/';
  // api = 'http://localhost/vayse-web/dashboard/webservices/';
  // api1 = 'http://localhost:8000/api/';

  guardados: Registro[] = [];

  // tslint:disable-next-line: max-line-length
  constructor( 
    private http: HttpClient, public toastController: ToastController, private storage: Storage, private navCtrl: NavController, private router: Router
  ) {
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = await this.storage.get('Registros') || [];
  }

  async guardarRegistro(id_negocio: any, property: any) {

    // console.log('ID Negocio: ' , id_negocio);
    // console.log('Propery: ' , property);
    

    await this.cargarStorage();

    const nuevoRegistro = new Registro (id_negocio, property);
    this.guardados.unshift(nuevoRegistro);

    console.log(this.guardados);
    this.storage.set('Registros', this.guardados);

    this.abrirRegistro(id_negocio)

  }

  abrirRegistro(id_negocio: any) {
    // this.navCtrl.navigateForward('pago', id_negocio);
    this.router.navigate( ['/pago', id_negocio ] );
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
  updatePerfil(id_user: string, nombre: string, correo: string, celular: string) {
    // tslint:disable-next-line: max-line-length
    console.log('[DataService][userPost]');
    return this.http.get(this.api1 + 'usuarios/updatePerfil?token=5Nc7C5Mz@Mu&id_user=' + id_user + '&nombre=' + nombre + '&correo=' + correo + '&celular=' + celular)
    .pipe(
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

  // se agrega código para obtener con una función los negocios
  getNegocios(latitud:any, longitud:any, id_subcategoria:any) {

    console.log('[DataService][getNegocios] ID Subcategorias: ', id_subcategoria);
  
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
    console.log('[DataService][getSubCategorias]', id_categoria);
    // tslint:disable-next-line: max-line-length
    return this.http.get(this.api + 'DEV/ws.php?action=get_subcategorias&token=5Nc7C5Mz@Mu&id_categoria=' + id_categoria).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  /* Requerimientos de la base: ID usuario, ID token usuario, ID negocio, ID metodo de pago, total de la venta, código de comprobación */
  aprobarVenta(
    id_user: string,
    id_negocio: any,
    id_metodo_pago: any,
    total: any,
    codigocomprobacion: any,
    saldo_vayse_usado: any
  ) {    
    return this.http.get(
      this.api + 'DEV/ws.php?action=aprobar_venta&token=5Nc7C5Mz@Mu&id_usuario='+ id_user +'&id_negocio='+ id_negocio +'&id_metodo_pago='+ id_metodo_pago +'&total='+ total +'&saldo_vayse_usado='+ saldo_vayse_usado +'&codigocomprobacion='+ codigocomprobacion
    ).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  /* Trae la info de los negocios de la base de datos los requerimientos son Token, id_negocio, action */
  getInfoNegocios(
    id_negocio: any,
  ) {
    console.log('Info Negocios');
    return this.http.get(
      this.api + 'DEV/ws.php?action=get_info_negocio&token=5Nc7C5Mz@Mu&id_negocio='+ id_negocio 
    ).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }


}
