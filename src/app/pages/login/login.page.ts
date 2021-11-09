import { AuthenticationService } from '../../services/authentication.service';
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
    
    let data = {
      email:this.loginUserData.email,
      password:this.loginUserData.password
    }
    this._auth.loginUser(this.loginUserData,data).subscribe( res => {
      let data = JSON.stringify(res.error);
      if (data) {
        console.log(JSON.stringify(res.error.message))
      }else{
        console.log(`respuesta login ${res.token}`);
        let token = res.token
        localStorage.setItem('token', token);
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

