import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })
export class  AuthService{

  constructor(private http: HttpClient) { }


  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      userName: credentials.userName,
      mdp: credentials.mdp
    }, httpOptions);
  }


  register(formData: FormData): Observable<any> {
    //  console.log("password======="+user.mdp);
    return this.http.post(AUTH_API +'signup',formData);
  }

}
