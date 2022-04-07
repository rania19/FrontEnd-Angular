import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RegisterRequest} from '../models/RegisterRequest';
import {JwtResponse} from '../models/JwtResponse';

import {map} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Product} from '../models/product.model';
import {ProductResponse} from '../models/productResponse';
import {Farm} from '../models/Farm';



const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})

};


@Injectable()
export class UserService{

  constructor(private http: HttpClient) {

  }

  ChangeDataPayment(idUser: number,formData: FormData ): Observable<any> {

    return this.http.post(`http://localhost:8081/api/v1/ChangeData/` + `${idUser}`, formData);

  }

  updateUser(idUser: number, user: User): Observable <any> {
    return this.http.put(`http://localhost:8081/api/v1/UpdateUser/` + `${idUser}`, user);
  }

  updateFarm(idFarm: number, farm: Farm): Observable <any> {
    return this.http.put(`http://localhost:8081/api/v1/UpdateFarm/` + `${idFarm}`, farm);
  }

  GetUserById(idUser: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/Getuser/` + `${idUser}` );

  }

  GetCustomData(idUser: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/Getpaydata/` + `${idUser}` );

  }

  GetClients(): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/GetAllUsers`);

  }

  GetToConfirmList(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/ListToConfirm/` + `${idUser}`);

  }

   UpdateEmail(idUser: number, newmail: string): Observable<any> {

    return this.http.put(`http://localhost:8081/api/v1/UpdateStripemails/` + `${idUser}`, newmail);

  }


  GetInvestements(idUser: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/v1/getInvests/` + `${idUser}`);

  }

  GetProductById(id: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/productManage/getP/` + `${id}`);

  }

  ChangeProductPhoto(idproduct: number,formData: FormData ): Observable<any> {

    return this.http.post(`http://localhost:8081/api/productManage/changeImg/` + `${idproduct}`,formData);

  }

  GetReloadedImage(idprod: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/productManage/ImgProd/` + `${idprod}`,  { responseType: 'blob' });

  }

  UpdateProduct(idProd: number, product: ProductResponse): Observable<any> {

    return this.http.put(`http://localhost:8081/api/productManage/UpdateProduct/` + `${idProd}`, product);

  }

  GetFarmsInvests(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/farminvests/` + `${idUser}`);

  }

 // private CurretUserSubject: BehaviorSubject<any>;
 // public CurrentUser: Observable<any>;
 // private baseUrl = 'http://localhost:8081/api/auth/register';


 // constructor(private http: HttpClient) {
  //    this.CurretUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
  //  this.CurrentUser = this.CurretUserSubject.asObservable();
 // }

 // public getCurrentUserValue(): any{
//  return this.CurretUserSubject.value;

 // }

 // SignUp(registerRequest: RegisterRequest): Observable<any> {
  //  return this.http.post<JwtResponse>(`${this.baseUrl}`, registerRequest,httpOptions)
    //  .pipe(map(data =>{
      //  this.saveUserData(data);
       //  return(data);
     // }));
 // }

  CancelSubscription(idInv: number, idUser: number): Observable<any> {

    return this.http.delete(`http://localhost:8081/api/v1/removeSub/` + `${idInv}` + `/` + `${idUser}`);

  }


  RateLivreur(idUser: number, note: number ): Observable<any> {

    return this.http.post(`http://localhost:8081/api/v1/ratelivreur/` + `${idUser}`, note);

  }


}
