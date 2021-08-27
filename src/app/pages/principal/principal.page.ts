import { AnadirpreguntaComponent } from './../../components/shared-components/anadirpregunta/anadirpregunta.component';
import { OpcionesComponent } from './../../components/shared-components/opciones/opciones.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ExcelenteRespuestaComponent } from 'src/app/components/shared-components/excelente-respuesta/excelente-respuesta.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public router:Router,
    public modalctrl:ModalController) {}

  async presentPopover(ev) {
    const popover = await this.popoverController.create({
      component: OpcionesComponent,
      cssClass: 'popoveropciones',
      event:ev,
      mode:"ios",
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async Popoverrespuesta(ev: any) {
    const popover = await this.popoverController.create({
      component: ExcelenteRespuestaComponent,
      event: ev,
      mode:"ios",
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
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
