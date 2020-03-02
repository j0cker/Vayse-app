import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { HeaderBackeditComponent } from './header-backedit/header-backedit.component';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    HeaderBackComponent,
    HeaderBackeditComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    HeaderBackComponent,
    HeaderBackeditComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
