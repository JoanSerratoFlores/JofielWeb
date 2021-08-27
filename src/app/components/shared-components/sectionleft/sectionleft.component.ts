import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionleft',
  templateUrl: './sectionleft.component.html',
  styleUrls: ['./sectionleft.component.scss'],
})
export class SectionleftComponent implements OnInit {
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
