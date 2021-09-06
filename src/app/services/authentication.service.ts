import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { take, map, switchMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


const helper=new JwtHelperService();
const TOKEN_KEY='jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user:Observable<any>;
  private userData =new BehaviorSubject(null);

  private _loginUrl="https://jofiel-api.egasystems.com/api/auth/login";

  constructor(private storage: Storage, private http: HttpClient, private plt: Platform, private router: Router) { 

    this.loadStoredToken();

  }

  loadStoredToken(){
    let platformObs=from(this.plt.ready());
    this.user=platformObs.pipe(
      switchMap(()=>{
        return from(this.storage.get(TOKEN_KEY))
      }),
      map(token => {
        console.log('Token from Storgae:',token)
        if (token) {
          let decoded = helper.decodeToken(token.token);
          console.log('decoded:',decoded) 
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  loginUser(user: { email: string; password: string; }):Observable<any>{
    return this.http.post<any>(this._loginUrl,user).pipe(
      take(1),
      map(res=>{
        return res
      }),
      switchMap(token=>{
        let decoded=helper.decodeToken(token.token);
        console.log('login decoded:',decoded)
        this.userData.next(decoded);
        let storageObs=from(this.storage.set(TOKEN_KEY,token));
        return storageObs;
      })
    );
  }

  getUser() {
    return this.userData.getValue();
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null);
    });
  }

}
