import { PopoverController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(
    private auth:AuthenticationService,
    private popoverctrl:PopoverController) { }

  ngOnInit() {}

  logout(){
    this.popoverctrl.dismiss()
    this.auth.logout()
  }

}
