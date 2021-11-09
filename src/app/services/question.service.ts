import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { catchError,tap,map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const apiUrl = 'http://localhost:3000/api/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {



  constructor(
    private http:HttpClient
    ) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        return of(result as T);
      };
    }


    getQuestions(){

      let stringToken = localStorage.getItem('token');
      let token = stringToken.replace(/['"]+/g, '')
      console.log(token);
      
      const httpOptions = {
        headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
        })
      };   
  

      const url = `http://localhost:3000/api/question`
      return this.http.get(url,httpOptions).pipe(
        catchError(error=>{
          if(error.error instanceof ErrorEvent){
            console.log('Error: ${error.error.message}');            
          }
          else{
            console.log(error);
            return of (error.error)
          }
          return of ([]);
        })
      )
    }  
}
