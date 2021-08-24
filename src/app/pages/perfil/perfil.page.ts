import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnadirpreguntaComponent } from 'src/app/components/shared-components/anadirpregunta/anadirpregunta.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public modalctrl:ModalController) { }
  async presentModal() {
    const modal = await this.modalctrl.create({
      component: AnadirpreguntaComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
