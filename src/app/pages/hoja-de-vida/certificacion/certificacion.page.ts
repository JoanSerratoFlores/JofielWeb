import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificacion',
  templateUrl: './certificacion.page.html',
  styleUrls: ['./certificacion.page.scss'],
})
export class CertificacionPage implements OnInit {

  public isActive: boolean = false;
  nombreprograma:string;
  Nivel:string;
  FechaInicio:string;
  FechaFinal:string;
  CentroFormacion:string;
  Modalidad:string;
  RedConocimiento:string;
  
    constructor() { }


  ngOnInit() {
  }

}
