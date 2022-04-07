import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Farm} from '../models/farm.model';
import {TokenStorageService} from '../../services/token-storage.service';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
     })
};

@Injectable()
export class FarmService {

  private baseUrl = 'http://localhost:8081/api/v1/farms';
  private existUrl = 'http://localhost:8081/api/v1/exist';
  f: Farm;
  list: Farm[] ;
  constructor(private http: HttpClient, tokenStorage: TokenStorageService) {
  }

  createFarm(formData: FormData , idClient: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idClient}`, formData);
  }

  getFarmsForClientToInvest(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/farmsforclient/` + `${idUser}`);


  }
  getFarmOfUser(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/exist/` + `${idUser}`);

  }
  GetSelectedFarm(idFarm: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/FarmSelected/` + `${idFarm}`);

  }

  getUserBoard(): Observable<any> {
    return this.http.get('http://localhost:8081/api/v1/user', { responseType: 'text' });
  }
}
