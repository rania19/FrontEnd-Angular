import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductElement} from '../models/ProductElement';
import {Investissement} from '../models/Investissement';
import {Livraison} from '../models/Livraison';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InvestService{

  private baseUrl = 'http://localhost:8081/api/v1/setInvest';

  constructor(private http: HttpClient) {
  }

  GetPropositions(idFarm: number, amount: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/invest/` + `${idFarm}` + `/` + `${amount}`);

  }

  SetInvest(idFarm: number, idUser: number, prop: ProductElement[]){
    return this.http.post(`${this.baseUrl}/${idFarm}` + `/` + `${idUser}`, prop);

  }

  ManageInvests(idUser: number, invests: Investissement[]){
    return this.http.post(`http://localhost:8081/api/v1/ManageInv/` + `${idUser}`, invests);

  }


  ConfirmLivraisons(livraison: Livraison){
    return this.http.post(`http://localhost:8081/api/v1/confLiv`, livraison);

  }





}
