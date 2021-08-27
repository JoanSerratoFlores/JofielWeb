import { FuncioneslaboralesComponent } from './../../../components/shared-components/funcioneslaborales/funcioneslaborales.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.page.html',
  styleUrls: ['./tecnologias.page.scss'],
})
export class TecnologiasPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: FuncioneslaboralesComponent,
    });
    return await modal.present();
  }

}
