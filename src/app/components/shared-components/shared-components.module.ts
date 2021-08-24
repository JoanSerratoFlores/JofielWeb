import { VisibilidadComponent } from './visibilidad/visibilidad.component';
import { PopovertemaaComponent } from './popovertemaa/popovertemaa.component';
import { PopoversectorComponent } from './popoversector/popoversector.component';
import { AnadirpreguntaComponent } from './anadirpregunta/anadirpregunta.component';
import { ExcelenteRespuestaComponent } from './../shared-components/excelente-respuesta/excelente-respuesta.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { SectionrightComponent } from './sectionright/sectionright.component';
import { SectionleftComponent } from './sectionleft/sectionleft.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionleftperfilComponent } from './sectionleftperfil/sectionleftperfil.component';
import { SectionrightperfilComponent } from './sectionrightperfil/sectionrightperfil.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SectionleftComponent,
    SectionrightComponent,
    OpcionesComponent,
    ExcelenteRespuestaComponent,
    AnadirpreguntaComponent,
    PopoversectorComponent,
    PopovertemaaComponent,
    VisibilidadComponent,
    SectionleftperfilComponent,
  SectionrightperfilComponent],
  exports:[
    HeaderComponent,
    SectionleftComponent,
    SectionrightComponent,
    OpcionesComponent,
    ExcelenteRespuestaComponent,
    AnadirpreguntaComponent,
    PopoversectorComponent,
    PopovertemaaComponent,
    VisibilidadComponent,
    SectionleftperfilComponent,
    SectionrightperfilComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedComponentsModule { }
