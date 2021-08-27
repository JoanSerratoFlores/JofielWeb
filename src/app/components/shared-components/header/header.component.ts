import { NotificacionesComponent } from './../notificaciones/notificaciones.component';
import { PopoverController } from '@ionic/angular';
import { PerfilComponent } from './../perfil/perfil.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public popoverController:PopoverController) { }

  async presentPopover(ev) {
    const popover = await this.popoverController.create({
      component: PerfilComponent,
      cssClass: 'popoverperfil',
      event:ev,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  
  async notificationPopover(ev) {
    const popover = await this.popoverController.create({
      component: NotificacionesComponent,
      cssClass: 'popovernotification',
      event:ev,
      mode:"ios",
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {}

}
