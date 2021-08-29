import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-header-cv',
  templateUrl: './header-cv.component.html',
  styleUrls: ['./header-cv.component.scss'],
})
export class HeaderCVComponent implements OnInit {

  constructor(
    public popoverController:PopoverController,
    public router:Router) { }

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
  toHome(){
    this.router.navigateByUrl("principal")
  }
  toCuestion(){
    this.router.navigateByUrl("preguntas")
  }
  ngOnInit() {}

}
