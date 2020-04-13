import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { HeaderBackeditComponent } from './header-backedit/header-backedit.component';
import { PopinsigniaComponent } from './popinsignia/popinsignia.component';
import { IonicRatingModule } from 'ionic4-rating';
import { PopdetailsaldoComponent } from './popdetailsaldo/popdetailsaldo.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeaderBackComponent,
    HeaderBackeditComponent,
    PopinsigniaComponent,
    PopdetailsaldoComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    HeaderBackComponent,
    HeaderBackeditComponent,
    PopinsigniaComponent,
    PopdetailsaldoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    IonicRatingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
