import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnologiasPageRoutingModule } from './tecnologias-routing.module';

import { TecnologiasPage } from './tecnologias.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnologiasPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [TecnologiasPage]
})
export class TecnologiasPageModule {}
