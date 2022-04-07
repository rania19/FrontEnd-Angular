import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})

};

@Injectable()
export class ProductService{
  private baseUrl = 'http://localhost:8081/api/productManage/Product';

  constructor(private http: HttpClient) {
  }

  AddProduct(formData: FormData , idFarm: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idFarm}`, formData);
  }

  RemoveProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/productManage/removeprod/` + `${id}`);
  }

  GetAnimalProducts(idFarm: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/productManage/ProductAnimals/` + `${idFarm}`);

  }

  GetMilkProducts(idFarm: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/productManage/ProductMilk/` + `${idFarm}`);

  }

  GetVegProducts(idFarm: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/productManage/ProductVeg/` + `${idFarm}`);

  }

  GetProductById(id: number): Observable<any> {

    return this.http.get (`http://localhost:8081/api/productManage/getP/` + `${id}`);

  }



}
