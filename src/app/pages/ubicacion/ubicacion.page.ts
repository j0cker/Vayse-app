import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Environment } from '@ionic-native/google-maps';
import {
  GoogleMap,
  GoogleMaps,
  GoogleMapsEvent,
  GoogleMapOptions,
  Geocoder,
  GeocoderResult,
  GoogleMapsAnimation,
  BaseArrayClass,
  Marker,
  MyLocation} from '@ionic-native/google-maps/ngx';
import { Storage } from '@ionic/storage';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map: GoogleMap;
  loading: any;

  latitud: any;
  longitud: any;

  id_negocio: number;
  infoDetalles: any;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    private storage: Storage,
    private dataService: DataService
  ) { }

  async ngOnInit() {
    this.getID();
    await this.platform.ready();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_negocio').then((val) => {
      console.log('ID Negocio: ', val);
      this.id_negocio = val;
      this.getInfoNegocios();
    });
  }

  getInfoNegocios() {
    this.dataService.getInfoNegocios( this.id_negocio )
    .subscribe( (data: any) => {
      if(data.success === 'true' || 'TRUE') {
        this.infoDetalles = data.negocios;
        console.log('info negocios: ', this.infoDetalles);
        this.loadMap();
        // this.bien()
      } else {
        // this.mal(data.message)
      }
    });
  }
  
  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js'
    });
    this.map = GoogleMaps.create('map_canvas');
    this.onButtonClick();
  }

  onButtonClick() {
    this.map.clear();
    // Get the location of you
    this.map.getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null ,2));

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30,
          bearing: 140,
          duration: 5000
        })
        .then(() => {
          // add a marker
          let marker: Marker = this.map.addMarkerSync({
            // title: '@ionic-native/google-maps plugin!',
            // snippet: 'This plugin is awesome!',
            position: location.latLng,
            animation: GoogleMapsAnimation.BOUNCE
          });

          
          // If clicked it, display the alert
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            this.showToast('Aquí estás tu');
          });
        });
      });

      //hay veces que no pasa de aquí
      let marker: Marker = this.map.addMarkerSync({

        'position': {
          lat: parseFloat(this.infoDetalles[0].latitud),
          lng: parseFloat(this.infoDetalles[0].longitud)

        },

        'title': this.infoDetalles[0].nombre_negocio,
        'snippet': 'promociones activas ',
        'icon': {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        },
        //label: 'Estas aquí', //aparentemente no sirve
        animation: GoogleMapsAnimation.DROP

      });

      // show the infoWindow
      marker.showInfoWindow();

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

    

  /*
  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js'
    });
    this.map = GoogleMaps.create('map_canvas');
    this.onButtonClick();
  }

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
        tilt: 30,
        bearing: 140,
        duration: 5000
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
    })
    .catch(err => {
      // this.loading.dismiss();
      this.showToast(err.error_message);
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
  */

}
