import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.page.html',
  styleUrls: ['./idioma.page.scss'],
})
export class IdiomaPage implements OnInit {
  selected_native:string;
  selected_extra:string;
  constructor() { }

  ngOnInit() {
  }

}
