import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Environment } from '@ionic-native/google-maps';
import { DataService } from '../../services/data.service';
import {
  GoogleMap,
  GoogleMaps,
  GoogleMapsEvent,
  Geocoder,
  GeocoderResult,
  GoogleMapsAnimation,
  BaseArrayClass,
  Marker,
  MyLocation} from '@ionic-native/google-maps/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map-subcategoria',
  templateUrl: './map-subcategoria.page.html',
  styleUrls: ['./map-subcategoria.page.scss'],
})

export class MapSubcategoriaPage implements OnInit {
  map: GoogleMap;
  loading: any;

  latitud: any;
  longitud: any;
  id_subcategoria: any;

  negocios: any = [];
  id_negocio: any;

  user: any;

  constructor(
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public toastCtrl: ToastController,
    private dataService: DataService,
    private toastController: ToastController,
    private router: ActivatedRoute,
    private routers: Router
  ) {
    this.router.params
      .subscribe( (params: any) => {
          console.log('params', params);
          this.id_subcategoria = params;
      });
   }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }
  
  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js'
    });
    this.map = GoogleMaps.create('map_canvas2');
    this.onButtonClick();
  }

  //tu ubicacion
  async onButtonClick() {
    this.map.clear();
    this.loading = await this.loadingCtrl.create({
      message: 'Rastreando tu ubicación...'
    });
    await this.loading.present();
    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      console.log('el json stringify that location',JSON.stringify(location, null ,2));
      this.latitud = location.latLng.lat;
      this.longitud = location.latLng.lng;
      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });
      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        // title: JSON.stringify(location.latLng),
        position: location.latLng,
        title: 'Estas aquí',
        //label: 'Estas aquí', //aparentemente no sirve
        animation: GoogleMapsAnimation.BOUNCE
      });
      // show the infoWindow
      marker.showInfoWindow();
      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('Your location is here (Tu ubicación)');
      });
      this.getNegocio();
    })
    .catch(err => {
      // this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  // obtiene el negocio
  getNegocio() {
    this.dataService.getNegocios(this.latitud, this.longitud, this.id_subcategoria.id_subcategoria)
    .subscribe( (data: any) => {
      this.negocios = data.negocios;
      console.log('Data: ', data);
      console.log('Negocios: ', this.negocios);

      this.onButton_click(event);
      
    }, ( error ) => {
      console.log('El error es: ', error);
      // this.userData = 'Este es el error: ' + error.toString();
      this.mal(error);
    });
  }

  // batch-geocoding marca los negocios

  async onButton_click(event) {
    this.map.clear();
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    // await this.loading.present();
    let start = Date.now();
    console.log('Aquí está el start = ', start);

    var negocios_parse_geolocation = new Array();

    console.log("negocios: ");
    console.log(this.negocios);

    for ( var index = 0 ; index < this.negocios.length; index++ ) {

      console.log("Indice: " + index);

      console.log(this.negocios[index]);
      console.log(this.negocios[index].latitud);

      negocios_parse_geolocation[index] =  new Array();
      negocios_parse_geolocation[index].lat = parseFloat(this.negocios[index].latitud);
      negocios_parse_geolocation[index].lng = parseFloat(this.negocios[index].longitud);

    }

    console.log("negocios_parse_geolocation:");
    console.log(negocios_parse_geolocation);

    // Geocode multiple location
    Geocoder.geocode({
      // Longitud y Latitud en la base de datos de Negocios
      "position" : negocios_parse_geolocation
    })
    .then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {     
      mvcArray.on('insert_at').subscribe((params: any[]) => {
        const index: number = params[0];
        const result: GeocoderResult = mvcArray.getAt(index);
        let marker: Marker = this.map.addMarkerSync({
          'position': result[0].position,
          'title': '<h1><strong><ion-button class="login" routerLink="/login" color="secondary" expand="block" size="default">Iniciar Sesión</ion-button></strong></h1>',
          //label: 'Estas aquí', //aparentemente no sirve
          animation: GoogleMapsAnimation.DROP
        })
        // marker.showInfoWindow();
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe( () => {
          console.log('Nuevo entro ', this.negocios[0].id_negocio);
          this.routers.navigate( ['/tabs-nav', this.negocios[0].id_negocio] );
          
        })
        console.log('variable result [0] position: ', result[0].position );
      });
      mvcArray.one('finish').then(() => {
        this.loading.dismiss();
        let end = Date.now();
        alert("duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
      });
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

  async mal(msj: any) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 4000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}