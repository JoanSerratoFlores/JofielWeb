import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-cv',
  templateUrl: './left-cv.component.html',
  styleUrls: ['./left-cv.component.scss'],
})
export class LeftCVComponent implements OnInit {

  public progress = .15;
  public porcentaje = 0;
  constructor() { }

  ngOnInit() 
  {
    this.porcentaje = this.progress*100;
  }

}
