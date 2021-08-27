import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitacionPageRoutingModule } from './capacitacion-routing.module';

import { CapacitacionPage } from './capacitacion.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitacionPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CapacitacionPage]
})
export class CapacitacionPageModule {}
