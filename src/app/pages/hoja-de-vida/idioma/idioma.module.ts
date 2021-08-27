import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdiomaPageRoutingModule } from './idioma-routing.module';

import { IdiomaPage } from './idioma.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdiomaPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [IdiomaPage]
})
export class IdiomaPageModule {}
