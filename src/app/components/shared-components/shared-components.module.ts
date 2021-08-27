import { LeftCVComponent } from './left-cv/left-cv.component';
import { SectionrightcuestionnComponent } from './sectionrightcuestionn/sectionrightcuestionn.component';
import { SectionleftcuestionnComponent } from './sectionleftcuestionn/sectionleftcuestionn.component';
import { CompartirComponent } from './compartir/compartir.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
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
import { InfoComponent } from './info/info.component';
import { FuncioneslaboralesComponent } from './funcioneslaborales/funcioneslaborales.component';
import { HistorialhabilidadesComponent } from './historialhabilidades/historialhabilidades.component';
import { ModalCargararchivocvComponent } from './modal-cargararchivocv/modal-cargararchivocv.component';



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
    SectionrightperfilComponent,
    NotificacionesComponent,
    PerfilComponent,
    CompartirComponent,
    SectionleftcuestionnComponent,
    SectionrightcuestionnComponent,
    LeftCVComponent,
    InfoComponent,
    FuncioneslaboralesComponent,
    HistorialhabilidadesComponent,
    ModalCargararchivocvComponent],
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
    SectionrightperfilComponent,
    NotificacionesComponent,
    PerfilComponent,
    CompartirComponent,
    SectionleftcuestionnComponent,
    SectionrightcuestionnComponent,
    LeftCVComponent,
    InfoComponent,
    FuncioneslaboralesComponent,
    HistorialhabilidadesComponent,
    ModalCargararchivocvComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedComponentsModule { }
