import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoversectorComponent } from '../popoversector/popoversector.component';
import { PopovertemaaComponent } from '../popovertemaa/popovertemaa.component';
import { VisibilidadComponent } from '../visibilidad/visibilidad.component';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.component.html',
  styleUrls: ['./compartir.component.scss'],
})
export class CompartirComponent implements OnInit {

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
  ngOnInit() {}

}
