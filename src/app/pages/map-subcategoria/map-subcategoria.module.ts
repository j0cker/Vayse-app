import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSubcategoriaPageRoutingModule } from './map-subcategoria-routing.module';

import { MapSubcategoriaPage } from './map-subcategoria.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSubcategoriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MapSubcategoriaPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MapSubcategoriaPageModule {}
