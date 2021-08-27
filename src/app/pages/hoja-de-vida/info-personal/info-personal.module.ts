import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPersonalPageRoutingModule } from './info-personal-routing.module';

import { InfoPersonalPage } from './info-personal.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPersonalPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [InfoPersonalPage]
})
export class InfoPersonalPageModule {}
