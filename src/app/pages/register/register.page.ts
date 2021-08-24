import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
step:any=1;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  submit(){
    this.step=this.step+1
  }
  tohome(){
    this.router.navigateByUrl("principal"
    )}

}
