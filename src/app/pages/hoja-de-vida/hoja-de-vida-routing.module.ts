import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojaDeVidaPage } from './hoja-de-vida.page';

const routes: Routes = [
  {
    path: '',
    component: HojaDeVidaPage
  },
  {
    path: 'articulos-academicos',
    loadChildren: () => import('./articulos-academicos/articulos-academicos.module').then( m => m.ArticulosAcademicosPageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'certificacion',
    loadChildren: () => import('./certificacion/certificacion.module').then( m => m.CertificacionPageModule)
  },
  {
    path: 'credenciales',
    loadChildren: () => import('./credenciales/credenciales.module').then( m => m.CredencialesPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'info-personal',
    loadChildren: () => import('./info-personal/info-personal.module').then( m => m.InfoPersonalPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./otros/otros.module').then( m => m.OtrosPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'tecnologias',
    loadChildren: () => import('./tecnologias/tecnologias.module').then( m => m.TecnologiasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaDeVidaPageRoutingModule {}
