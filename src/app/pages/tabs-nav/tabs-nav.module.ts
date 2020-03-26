import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsNavPageRoutingModule } from './tabs-nav-routing.module';

import { TabsNavPage } from './tabs-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsNavPageRoutingModule
  ],
  declarations: [TabsNavPage]
})
export class TabsNavPageModule {}
