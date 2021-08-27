import { HistorialhabilidadesComponent } from './../../../components/shared-components/historialhabilidades/historialhabilidades.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.page.html',
  styleUrls: ['./capacitacion.page.scss'],
})
export class CapacitacionPage implements OnInit {
  
  public isActive: boolean = false;
  Institucion:string;
  NombreCapacitacion:string;
  AreaConocimiento:string;
  Nivel:string;
  Modalidad:string;
  FechaInicio:string;
  FechaFinalizacion:string;
  Pais:string;
  Ciudad:string;
  
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: HistorialhabilidadesComponent,
      cssClass: 'fullscreen'
    });
    return await modal.present();
  }

}
