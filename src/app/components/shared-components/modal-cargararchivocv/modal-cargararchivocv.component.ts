import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cargararchivocv',
  templateUrl: './modal-cargararchivocv.component.html',
  styleUrls: ['./modal-cargararchivocv.component.scss'],
})
export class ModalCargararchivocvComponent implements OnInit {

  public isActive: boolean = false;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
  open(){
    this.isActive=true
  }
  close(){
    this.isActive=false
  }
}
