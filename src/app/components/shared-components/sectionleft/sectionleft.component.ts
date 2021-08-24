import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionleft',
  templateUrl: './sectionleft.component.html',
  styleUrls: ['./sectionleft.component.scss'],
})
export class SectionleftComponent implements OnInit {

  public isActive: boolean = false;
    constructor() { }

  ngOnInit() {
  }
isactive(){
  this.isActive=true
}
isntactive(){
  this.isActive=false
}
 
}
