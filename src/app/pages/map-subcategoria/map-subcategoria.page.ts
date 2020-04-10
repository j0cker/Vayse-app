import { Component, OnInit, NgZone } from '@angular/core';
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
  //loading: any;

  latitud: any;
  longitud: any;
  id_subcategoria: any;

  marker: any;

  negocios: any = [];
  id_negocio: any;

  isRunning: boolean = false;
  user: any;

  constructor(
    public loadingCtrl: LoadingController,
    private platform: Platform,
    public toastCtrl: ToastController,
    private dataService: DataService,
    private toastController: ToastController,
    private router: ActivatedRoute,
    private routers: Router,
    private ngZone: NgZone
  ) {
    this.router.params
      .subscribe( (params: any) => {
          console.log('params', params);
          this.id_subcategoria = params;
      });
   }

  ngOnInit() {
    this.platform.ready();
    this.loadMap();
  }
  
  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBG2qkcfyKgIBzOoSnoLhBl_3CHJkS_2js'
    });
    this.map = GoogleMaps.create('map_canvas2');
    this.onButtonClick();
  }

  onButtonClick() {

    if (this.isRunning) {
      return;
    }
    this.isRunning = true;

    this.map.clear();

    
    // Get the location of you
    
    this.map.getMyLocation().then((location: MyLocation) => {
      //alert("entro 1");
      console.log(JSON.stringify(location, null ,2));
      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30,
        bearing: 140,
        duration: 5000
      });
      // add a marker
      this.marker = this.map.addMarkerSync({
        // title: JSON.stringify(location.latLng),
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });
      // show the infoWindow
      this.marker.showInfoWindow();
      // If clicked it, display the alert
      this.marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
      //alert("entro 2");
      //this.loading.dismiss();
      

    })
    .catch(err => {
      
      //alert("entro 3");
      this.showToast(err.error_message);
      //this.loading.dismiss();
    });
  
    
    this.getNegocio();

    this.isRunning = false;
  }

  // obtiene el negocio
  getNegocio() {

    this.dataService.getNegocios(this.latitud, this.longitud, this.id_subcategoria.id_subcategoria)
    .subscribe( (data: any) => {

      this.negocios = data.negocios;
      console.log('Data: ', data);
      console.log('Negocios: ', this.negocios);
      /*
      if(data.response === false) {
        this.mal('No hay negocios cerca de tu ubicación')
        this.routers.navigate(['/dashboard'])
      }
      */

      //this.map.clear();

      let start = Date.now();

      console.log('Aquí está el start = ', start);

      console.log("negocios: ");
      console.log(this.negocios);
      
      if(this.negocios === undefined) {
        this.mal('No hay negocios cerca de tu ubicación')
        this.routers.navigate(['/dashboard'])
      }
      
      if(this.negocios.length>0){

        for ( var index2 = 0 ; index2 < this.negocios.length; index2++ ) {

          console.log("Indice: " + index2);
    
          console.log(this.negocios[index2]);
          console.log(this.negocios[index2].latitud);
          console.log(this.negocios[index2].longitud);
          
            
              //hay veces que no pasa de aquí
              this.marker = this.map.addMarkerSync({
                'position': {
                  lat: parseFloat(this.negocios[index2].latitud),
                  lng: parseFloat(this.negocios[index2].longitud)
                },
                'title': this.negocios[index2].nombre_negocio,
                'index': index2,
                //label: 'Estas aquí', //aparentemente no sirve
                animation: GoogleMapsAnimation.DROP
              });
              //AQUI YA NO LLEGABA
              // marker.showInfoWindow();
              this.marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe( (data: any) => {
                console.log('data.', data);
                console.log('data.', data[1].get('index'));
                
                console.log('Nuevo entro ', this.negocios[data[1].get('index')].id_negocio);
                this.ngZone.run( () => this.routers.navigate( ['/tabs-nav', this.negocios[data[1].get('index')].id_negocio ] )).then();
                
              });


        }

      }

      /*
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

          // Geocode multiple location
          Geocoder.geocode({
            // Longitud y Latitud en la base de datos de Negocios
            //"position" : negocios_parse_geolocation
            "position" : this.negocios_hardcore
          }).then((mvcArray: BaseArrayClass<GeocoderResult[]>) => {     
            mvcArray.on('insert_at').subscribe((params: any[]) => {
              console.log('params: ', params);
              //AQUI LUEGO IMPRIMIA ALERT 3
              const index: number = params[0];

              console.log("index: " + index);
              
              //aqui alert 5
              const result: GeocoderResult = mvcArray.getAt(index);
              //hay veces que no pasa de aquí
              this.marker = this.map.addMarkerSync({
                'position': result[0].position,
                'title': this.negocios[index].nombre_negocio,
                'index': index,
                //label: 'Estas aquí', //aparentemente no sirve
                animation: GoogleMapsAnimation.DROP
              });
              //AQUI YA NO LLEGABA
              // marker.showInfoWindow();
              this.marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe( (data: any) => {
                console.log('data.', data);
                console.log('data.', data[1].get('index'));
                
                console.log('Nuevo entro ', this.negocios[data[1].get('index')].id_negocio);
                this.ngZone.run( () => this.routers.navigate( ['/tabs-nav', this.negocios[data[1].get('index')].id_negocio ] )).then();
                
              });

              console.log('variable result [0] position: ', result[0].position );
            });
            mvcArray.one('finish').then(() => {
              //this.loading.dismiss();
              let end = Date.now();
              //alert("duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
            });
          }).catch(
            console.error
          );
          */

        } ), (error) => {
          console.log('El error es: ', error);
          // this.userData = 'Este es el error: ' + error.toString();
          this.mal(error);
      };
      

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