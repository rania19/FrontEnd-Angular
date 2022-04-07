import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Signal} from '../models/Signal';


@Injectable()
export class FeedbackService{

    constructor(private http: HttpClient) {
      }


  SetComment(idFarm: number, idUser: number, review: string): Observable<any> {

    return this.http.post(`http://localhost:8081/api/v1/setComment/` + `${idFarm}` + `/` + `${idUser}`, review);

  }

  GetFeedback(idFarm: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/getfeedbacks/` + `${idFarm}`);

  }

  DeleteFeed(feedid: number): Observable<any> {

    return this.http.delete(`http://localhost:8081/api/v1/removefeed/` + `${feedid}`);

  }

  SetSignal(idUser: number, idFeed: number, s: Signal): Observable<any> {

    return this.http.post(`http://localhost:8081/api/v1/report/` + `${idUser}` + `/` + `${idFeed}`, s);

  }


  GetSignaledFeedByUSer(idUser: number): Observable<any> {

    return this.http.get(`http://localhost:8081/api/v1/getSignaledFeed/` + `${idUser}`);

  }

}
