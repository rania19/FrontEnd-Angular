import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductElement} from '../models/ProductElement';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FarmService} from '../farm/services/farm.service';
import {Farm} from '../farm/models/farm.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InvestService} from '../services/InvestService';
import {TokenStorageService} from '../services/token-storage.service';
import {InvestRequest} from '../models/InvestRequest';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  InvestPay: FormGroup;
  propSelected: ProductElement[];
  idFarm: number;
  ErrorPayment:boolean;
  farm: Farm;
  InvInter: InvestRequest;
  investRequest: InvestRequest;
  CardInfos: FormGroup;
  paymentDone: boolean;
  idUser: number;
  amountTopay: number;
  tokenTosend: string;

  constructor(private router: Router,private route: ActivatedRoute, private farmService: FarmService, private http:HttpClient, private investService: InvestService, private tokenStorage: TokenStorageService, private cd: ChangeDetectorRef) {

  }
  refresh() {
    this.cd.detectChanges();
  }
  ngOnInit(): void {
    this.paymentDone = false;
    this.ErrorPayment = false;

     this.CardInfos = new FormGroup({
       cardNumber: new FormControl(null, [Validators.required]),
       expMonth: new FormControl(null, Validators.required),
       expYear: new FormControl(null, Validators.required),
       cvc: new FormControl(null, Validators.required),

     });

    this.propSelected =JSON.parse(this.route.snapshot.params['prop']);
    console.log("Selected proppp to pay" + this.propSelected);

    this.route.params.subscribe(
      (parms: Params) => {
        this.idFarm = +parms['id'];
      }
    );

    console.log("farm id to payy" + this.idFarm);

    this.route.params.subscribe(
      (parms: Params) => {
        this.amountTopay = +parms['amount'];
      }
    );

    console.log("Amounnt to payy, IIS" + this.amountTopay);
    this.getFarmTitle();





  }

  getFarmTitle() {
    this.farmService.GetSelectedFarm(this.idFarm).subscribe(
      data => {
        this.farm = data;
        console.log("Data  is   " + data);
        //  console.log(" F is   "+this.f);
        // this.farm = new Farm(this.f.id,this.f.nomF,this.f.descriptionF,this.f.imageF,this.f.region);
        console.log("Farm farm apres remp isss" + this.farm);
      }
    );
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
        this.router.navigate(['/account'])
          .then(() => {
            window.location.reload();
            window.location.reload();
          });
      } else {
        console.log(response.error.message);
        this.ErrorPayment = true;
        this.refresh();

      }
    });
  }

  chargeCard(token: string) {
    this.tokenTosend = token;
    this.InvInter = this.CardInfos.value;
    this.investRequest = new InvestRequest(this.propSelected ,this.amountTopay, this.InvInter.cardNumber, this.InvInter.cvc, this.InvInter.expMonth, this.InvInter.expYear);
    this.idUser = this.tokenStorage.getUser().id;
    const formData = new FormData();
    const invReq = this.investRequest;
    //const user = this.registerForm.value;
    formData.append('invReq', JSON.stringify(invReq));
    formData.append('token', token);
    //const finalAmount = this.amountTopay;
    //const headers = new HttpHeaders({'token': token, 'amount': finalAmount.toString(), 'prop':this.propSelected.toString()});

    //this.http.post('http://localhost:8081/api/v1/payment', {prop: this.propSelected}, {headers: headers})
    this.http.post (`http://localhost:8081/api/v1/Subscribe/` + `${this.idFarm}` + `/` + `${this.idUser}`,formData)
     .subscribe(resp => {
        console.log(resp);
        if (resp != null){
          console.log(" response not null and entred to invest");
          this.paymentDone = true;
          this.refresh();
          console.log(this.paymentDone);

         // this.investService.SetInvest(this.idFarm,this.tokenStorage.getUser().id,this.propSelected).subscribe(
          //   data => {
            // console.log("Investement is Set and Dataa investement isss"+data);
       // });

        }
       if (resp == null){
         console.log(" Fama ghamltaa");

         // });

       }

       });
    }


}
