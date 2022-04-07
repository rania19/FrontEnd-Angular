import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BannRequest} from '../models/BannRequest';


@Injectable()
export class AdminService{

  constructor(private http: HttpClient) {

  }

  GetRegionPourcentages(): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/RegionPer`);

  }

  GetCLientsNumber(): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/GetClientNumb`);

  }


  GetLivreursNumber(): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/GetLivreursNumb`);

  }

  GetFarmsNumber(): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/GetFarmsNumb`);

  }

  GetInvestsNumber(): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/GetInvestNumb`);

  }

  registerLivreur(formData: FormData): Observable<any> {

    return this.http.post(`http://localhost:8081/api/v1/addliv`, formData);
  }

  GetLivreurs(): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/GetLivreurs`);

  }

  DeleteLivreur(idUser: number): Observable<any> {

    return this.http.delete(`http://localhost:8081/api/v1/removeliv/` + `${idUser}`);

  }

  GetUserInfos(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/GetUser/` + `${idUser}`);

  }



  GetViolenceSignal(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/Violence/` + `${idUser}`);

  }



  GetHarcelementSignal(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/Harcelement/` + `${idUser}`);

  }


  GetFausseInfosSignal(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/FauxInfos/` + `${idUser}`);

  }
  GetSpamSignal(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/spam/` + `${idUser}`);

  }


  BannUser(idUser: number, bannrequest: BannRequest): Observable<any> {

    return this.http.post(`http://localhost:8081/api/v1/BannUser/` + `${idUser}`, bannrequest);

  }

  GetlistLivraisons(idliv: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/GetListLivraison/` + `${idliv}`);

  }

}
