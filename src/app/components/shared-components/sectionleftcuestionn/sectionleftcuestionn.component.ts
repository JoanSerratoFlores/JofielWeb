import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionleftcuestionn',
  templateUrl: './sectionleftcuestionn.component.html',
  styleUrls: ['./sectionleftcuestionn.component.scss'],
})
export class SectionleftcuestionnComponent implements OnInit {
isactive:boolean=false;
actived:boolean=false;

  constructor() { }

  ngOnInit() {}

  active(){
    this.isactive=true
  }
  inactive(){
    this.isactive=false
  }
  activedd(){
    this.actived=true
  }
  inactived(){
    this.actived=false
  }
}
