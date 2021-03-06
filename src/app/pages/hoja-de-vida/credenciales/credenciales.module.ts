import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialesPageRoutingModule } from './credenciales-routing.module';

import { CredencialesPage } from './credenciales.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialesPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CredencialesPage]
})
export class CredencialesPageModule {}
