import { ModalCargararchivocvComponent } from './../../../components/shared-components/modal-cargararchivocv/modal-cargararchivocv.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.page.html',
  styleUrls: ['./credenciales.page.scss'],
})
export class CredencialesPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalCargararchivocvComponent,
      //cssClass: 'fullscreen'
    });
    return await modal.present();
  }

}
