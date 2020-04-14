import { Component, EventEmitter, Input, Output, forwardRef  } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataService } from 'src/app/services/data.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { PopoverController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-popinsignia',
  templateUrl: './popinsignia.component.html',
  styleUrls: ['./popinsignia.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PopinsigniaComponent),
      multi: true
    }
  ]
})
export class PopinsigniaComponent implements ControlValueAccessor {

  idNegocio: any;
  idUsuario: any;
  
  @Input()
  rate: number;

  @Input()
  readonly:boolean;
  
  @Input()
  size: string = 'default';

  @Output()
  rateChange: EventEmitter<number> = new EventEmitter();
  hoverRate: number;
  _onChange: Function;

  constructor(
    private storage: Storage,
    private dataService: DataService,
    private popoverCtrl: PopoverController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.getID();
  }

  getID() {
    // Or to get a key/value pair
    this.storage.get('id_negocio').then((val) => {
      console.log('ID Negocio: ', val);
      this.idNegocio = val;
    });
    this.storage.get('id_usuario').then((val) => {
      console.log('ID Usuario: ', val);
      this.idUsuario = val;
    });
  }

  onClick(rate) {
    this.rate = rate;
    this.rateChange.emit(this.rate);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.rate = value;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }

  pushValoracion() {
    if ( this.rate === undefined ) {
      this.mal('Debes de seleccionar mínimo una estrella');
    } else {
      this.dataService.pushValoracion( this.idNegocio, this.idUsuario, this.rate )
      .subscribe( (data: any) => {
        if ( data.success === 'true' || 'TRUE' ) {
          console.log('This valoracion: ', this.rate);
          this.popoverCtrl.dismiss()
          this.bien();
        } else {
          this.mal(data.message);
        }
      });
    }
  }

  cerrar(){
    this.popoverCtrl.dismiss()
  }

  async bien() {
    const toast = await this.toastCtrl.create({
      message: 'Gracias por tu valoración',
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

  async mal(msj: any) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
