import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Environment } from '@ionic-native/google-maps';
import { DataService } from '../../services/data.service';
import {
  GoogleMap,
  GoogleMaps,
  GoogleMapsEvent,
  GoogleMapOptions,
  Geocoder,
  GeocoderResult,
  BaseArrayClass,
  Marker} from '@ionic-native/google-maps/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-subcategoria',
  templateUrl: './map-subcategoria.page.html',
  styleUrls: ['./map-subcategoria.page.scss'],
})

export class MapSubcategoriaPage {

  map: GoogleMap;
  isRunning: boolean = false;

  loading: any;

  latitud: any;
  longitud: any;
  id_subcategoria: any;

  negocios: any [] = [];

  user: any;

  constructor( 
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private dataService: DataService,
    private toastController: ToastController,
    private router: ActivatedRoute,
    private mapOptions: GoogleMapOptions
  ) {
    this.router.params
      .subscribe((params: any) => {
          console.log(params);
          this.id_subcategoria = params;
      });
   }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js'
    });

    this.map = GoogleMaps.create('map_canvas2', this.mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 19.3000409,
        lng: -99.1031679
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
    this.onButton_click(event);
  }

  // Obtiene tu ubicación


  
  // batch-geocoding

  async onButton_click(event) {
    if(this.isRunning){
      return;
    }
    this.isRunning = true;
    let start = Date.now();
    console.log('Aquí está el start = ', start );
    // Geocode multiple location
    Geocoder.geocode({
      // locations for position
      "position": [
        { "lat": 19.2999144, "lng": -99.1030284 },
        { "lat": 19.2999386, "lng": -99.1034268 },
      ]
    })
    .then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {

      mvcArray.one('finish').then(() => {
        if (mvcArray.getLength() > 0) {
          let results: any[] =  mvcArray.getArray();
          results.forEach((result: GeocoderResult[]) => {
  
            // Get a result
            let address: string = [
              result[0].subThoroughfare || "",
              result[0].thoroughfare || "",
              result[0].locality || "",
              result[0].adminArea || "",
              result[0].postalCode || "",
              result[0].country || ""].join(", ");
  
            let marker: Marker = this.map.addMarkerSync({
              'position': result[0].position,
              'icon': 'assets/img/logo.png',
              'title': address
            });
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick.bind(this));
  
          });
        }
  
        let end = Date.now();
        this.isRunning = false;
        console.log('finish', mvcArray.getArray());
        alert("duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
      });
  
    });
  }

  onMarkerClick(params: any[]) {
    let marker: Marker = params[1];
    marker.showInfoWindow();
  }

// obtiene el negocio

  getNegocio() {
    this.dataService.getNegocios(this.latitud, this.longitud, this.id_subcategoria.id_subcategoria)
    .subscribe( (data: any) => {
      this.negocios = data.negocios;
      console.log('[Login][Entrar] Data: ' + data);
      console.log('[Login][Entrar] Negocios: ', this.negocios);
      
      if (data.response === true) {
        
      } else {
        this.mal(data.message);
      }
      
    }, ( error ) => {
      console.log(`El error es: ${error}`);
      // this.userData = 'Este es el error: ' + error.toString();
      this.mal(error);
    });
  }
  
  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
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