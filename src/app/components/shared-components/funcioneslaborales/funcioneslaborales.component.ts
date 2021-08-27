import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-funcioneslaborales',
  templateUrl: './funcioneslaborales.component.html',
  styleUrls: ['./funcioneslaborales.component.scss'],
})
export class FuncioneslaboralesComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
}
