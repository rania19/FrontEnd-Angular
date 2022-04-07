import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reclamation} from '../models/Reclamation';
import {Common} from '../models/common';



const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})

};

@Injectable()
export class ReclamationService{


  constructor(private http: HttpClient) {
  }

  SendReclamation(idUser: number , reclamation: Reclamation): Observable<any> {
    return this.http.post(`http://localhost:8081/api/v1/sendRec/` + `${idUser}`, reclamation);
  }

  getReclamations(): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/GetRecs`);


  }

  getReclamationsByDate(date: Date): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/GetRecsBydate/` + `${date}`);


  }

   RemoveRec(id: number): Observable<any> {

    return this.http.delete(`http://localhost:8081/api/v1/deleteRec/` + `${id}`);

  }


  ResetNews(id: number, common: Common): Observable<any> {
    return this.http.post(`http://localhost:8081/api/v1/ResetNews/` + `${id}`, common);
  }

  AddNews(id: number, common: Common): Observable<any> {
    return this.http.post(`http://localhost:8081/api/v1/RecsNumb/` + `${id}`, common);
  }


  getNews(): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/GetNews`);
  }


}
