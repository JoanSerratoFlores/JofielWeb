import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectosPageRoutingModule } from './proyectos-routing.module';

import { ProyectosPage } from './proyectos.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectosPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ProyectosPage]
})
export class ProyectosPageModule {}
