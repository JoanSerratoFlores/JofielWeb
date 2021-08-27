import { CompartirComponent } from './../compartir/compartir.component';
import { VisibilidadComponent } from './../visibilidad/visibilidad.component';
import { PopoversectorComponent } from './../popoversector/popoversector.component';
import { PopovertemaaComponent } from './../popovertemaa/popovertemaa.component';
import { ModalController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anadirpregunta',
  templateUrl: './anadirpregunta.component.html',
  styleUrls: ['./anadirpregunta.component.scss'],
})
export class AnadirpreguntaComponent implements OnInit {

  constructor(public modalctrl:ModalController,
    public popoverctrl:PopoverController) { }

  dismissmodal(){
    this.modalctrl.dismiss()
    }

    async PopoverTema(ev: any) {
      const popover = await this.popoverctrl.create({
        component: PopovertemaaComponent,
        cssClass:'popovertema',
        event: ev,
        mode:"ios",
      });
      await popover.present();
  
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

    async compartilink() {
      const modal = await this.modalctrl.create({
        component: CompartirComponent,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }

    async PopoverSector(ev: any) {
      const popover = await this.popoverctrl.create({
        component: PopoversectorComponent,
        cssClass:'popoversector',
        event: ev,
        mode:"ios",
      });
      await popover.present();
  
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

    async PopoverVisibilidad(ev: any) {
      const popover = await this.popoverctrl.create({
        component: VisibilidadComponent,
        cssClass:'popovervisibilidad',
        event: ev,
      });
      await popover.present();
  
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

    compartirlink(){
      this.modalctrl.dismiss();
this.compartilink();
    }

    ngOnInit() {}
  
}
