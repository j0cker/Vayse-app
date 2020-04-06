import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { HeaderBackeditComponent } from './header-backedit/header-backedit.component';
import { PopinsigniaComponent } from './popinsignia/popinsignia.component';
import { PopopinionComponent } from './popopinion/popopinion.component';
import { IonicRatingModule } from 'ionic4-rating';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeaderBackComponent,
    HeaderBackeditComponent,
    PopinsigniaComponent,
    PopopinionComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    HeaderBackComponent,
    HeaderBackeditComponent,
    PopinsigniaComponent,
    PopopinionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    IonicRatingModule
  ]
})
export class ComponentsModule { }
