import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionleftperfil',
  templateUrl: './sectionleftperfil.component.html',
  styleUrls: ['./sectionleftperfil.component.scss'],
})
export class SectionleftperfilComponent implements OnInit {
  
  isActive:boolean=false
  
  constructor() { }

  ngOnInit() {}

  isactive(){
    this.isActive=true
  }
  
  isntactive(){
    this.isActive=false
  }

}
