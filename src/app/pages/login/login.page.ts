import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginUserData={
    email:"",
    password:"",
  }
  constructor(
    private router:Router, 
    private _auth:AuthenticationService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  gologinadmin(){
    this._auth.loginUser(this.loginUserData).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/principal');
      }
    }, async error => {
      const alert = await this.alertCtrl.create({
        header: 'Login Fallido',
        message: 'Credentiales Erróneos.',
        buttons: ['OK']
      });
      await alert.present();
      console.log(error)
 });
  }
}
