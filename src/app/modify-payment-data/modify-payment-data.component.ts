import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {InvestRequest} from '../models/InvestRequest';
import {ChangeDataRequest} from '../models/ChangeDataRequest';
import {TokenStorageService} from '../services/token-storage.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-modify-payment-data',
  templateUrl: './modify-payment-data.component.html',
  styleUrls: ['./modify-payment-data.component.css']
})
export class ModifyPaymentDataComponent implements OnInit {

  CardInfos: FormGroup;
  ErrorData: boolean;
  changeDone: boolean;
  idUser: number;
  tokenTosend: string;
  changeRequest: ChangeDataRequest;
  changeInter: ChangeDataRequest;
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService,private cd: ChangeDetectorRef, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.changeDone = false;
    this.ErrorData = false;
    this.CardInfos = new FormGroup({
      cardNumber: new FormControl(null, [Validators.required]),
      expMonth: new FormControl(null, Validators.required),
      expYear: new FormControl(null, Validators.required),
      cvc: new FormControl(null, Validators.required),
    });
  }

  refresh() {
    this.cd.detectChanges();
  }

  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: form.cardNumber.value,
      exp_month: form.expMonth.value,
      exp_year: form.expYear.value,
      cvc: form.cvc.value
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token);
        this.router.navigate(['account'])
          .then(() => {
            window.location.reload();
          });
      } else {
        console.log(response.error.message);
        this.ErrorData = true;
        this.refresh();

      }
    });
  }



  chargeCard(token: string) {
    this.tokenTosend = token;
    this.changeInter = this.CardInfos.value;
    this.changeRequest = new ChangeDataRequest(this.changeInter.cardNumber, this.changeInter.cvc, this.changeInter.expMonth, this.changeInter.expYear);
    // this.investRequest = new InvestRequest(this.propSelected ,this.amountTopay, this.InvInter.cardNumber, this.InvInter.cvc, this.InvInter.expMonth, this.InvInter.expYear);
     this.idUser = this.tokenStorage.getUser().id;
    const formData = new FormData();
   const changeReq = this.changeRequest;

    formData.append('changeReq', JSON.stringify(changeReq));
    formData.append('token', token);

    this.http.post(`http://localhost:8081/api/v1/ChangeData/` + `${this.idUser}`, formData).subscribe(
      resp => {
        console.log(resp);
        if (resp != null){
          console.log(" response not null and entred to invest");
          this.changeDone = true;
          this.refresh();
          console.log("change done"+this.changeDone);

        }

      },
      error => console.log(error)
    );


  }



}
