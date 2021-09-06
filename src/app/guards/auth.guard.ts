import { take, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private auth:AuthenticationService,
    private router:Router,
    private alertCtrl: AlertController){}

  canActivate(route:ActivatedRouteSnapshot):Observable<boolean>{
    return this.auth.user.pipe(
      take(1),
      map(user=>{
        console.log('in canactivate: ',user);
        if(!user){
          this.alertCtrl.create({
            header: 'Acceso Restringido',
            message: 'Debes ingresar como usuario para acceder a esta página',
            buttons: ['OK']
          }).then(alert => alert.present());
          this.router.navigateByUrl('/');
          return false;
        }
        else{
          return true;
        }
      })
      )
   }
  
}
