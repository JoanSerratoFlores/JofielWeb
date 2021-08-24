import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {
  constructor(private popoverctrl:PopoverController) { }

  ngOnInit() {}
  dismiss()
  {
    this.popoverctrl.dismiss()
  }
}
