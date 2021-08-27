import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticulosAcademicosPageRoutingModule } from './articulos-academicos-routing.module';

import { ArticulosAcademicosPage } from './articulos-academicos.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticulosAcademicosPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ArticulosAcademicosPage]
})
export class ArticulosAcademicosPageModule {}
