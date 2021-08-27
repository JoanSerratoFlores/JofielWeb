import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historialhabilidades',
  templateUrl: './historialhabilidades.component.html',
  styleUrls: ['./historialhabilidades.component.scss'],
})
export class HistorialhabilidadesComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
}
