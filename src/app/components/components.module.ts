import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBackComponent } from './header-back/header-back.component';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeaderBackComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
      HeaderBackComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
