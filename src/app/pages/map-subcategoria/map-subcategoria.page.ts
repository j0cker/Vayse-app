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
import { ActivatedRoute } from '@angular/router';

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

  negocios: any [] = [];

  user: any;

  constructor(public loadingCtrl: LoadingController, private platform: Platform, public toastCtrl: ToastController, private dataService: DataService, private toastController: ToastController, private router: ActivatedRoute ) {
    this.router.params
      .subscribe((params: any) => {
          console.log(params);
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
    this.onButton_click(event);
  }

  async onButtonClick() {
    this.map.clear();
    this.loading = await this.loadingCtrl.create({
      message: 'Rastreando tu ubicación...'
    });
    // await this.loading.present();
    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      //this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));
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
        animation: GoogleMapsAnimation.BOUNCE
      });
      // show the infoWindow
      marker.showInfoWindow();
      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });

      this.getNegocio();

    })
    .catch(err => {
      // this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  // batch-geocoding

  async onButton_click(event) {
    this.map.clear();
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    let start = Date.now();
    console.log(`Aquí está el start = ${start}`);
    // Geocode multiple location
    Geocoder.geocode({
      // Google office locations in California, USA
      "position" : [
        { "lat": parseInt(this.negocios[0].latitud) , "lng": parseInt(this.negocios[0].longitud) },
      ]
    })
    .then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {     
      mvcArray.on('insert_at').subscribe((params: any[]) => {
        const index: number = params[0];
        const result: GeocoderResult = mvcArray.getAt(index);
        console.log(`Variable inicializada index = ${index}`);
        console.log(`Variable inicializada results = `, result);
        this.map.addMarkerSync({
          'position':result[0].position,
          'title':  JSON.stringify(result)
        });
      });
      mvcArray.one('finish').then(() => {
        this.loading.dismiss();
        let end = Date.now();
        console.log(`Variable end = ${end}`);
        
        alert("duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
        let results: any[] = mvcArray.getArray();
        console.log('Variable final results = ',results);
      });
    });
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
