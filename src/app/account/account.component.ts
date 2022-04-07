import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {User} from '../models/user.model';
import Cotter from 'cotter';
import {Router} from '@angular/router';
import {Investissement} from '../models/Investissement';
import {ProductElement} from '../models/ProductElement';
import {UserService} from '../services/user.service';
import {Farm} from '../farm/models/farm.model';
import {CustomerPaymentData} from '../models/CustomerPaymentData';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChangeDataRequest} from '../models/ChangeDataRequest';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BannDialogComponent} from '../bann-dialog/bann-dialog.component';
import {CancelInvestDialogComponent} from '../cancel-invest-dialog/cancel-invest-dialog.component';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  confirmAlertSet: boolean;
  CardInfos: FormGroup;
  modifyOn: boolean;
  tokenTosend: string;
  changeRequest: ChangeDataRequest;
  changeInter: ChangeDataRequest;
  ErrorData: boolean;
  changeDone: boolean;
  success = false;
  payload = null;
  payloadString = null;
  idUser: number;
  CustData: CustomerPaymentData;

  newCustData: any;
  content = '' ;
  listInvests: Investissement[];
  Farminvests: Investissement[];
  invstPord: ProductElement[];
  farm: Farm;
  user: User;

  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef,private http: HttpClient,private userService: UserService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {

    this.userService.GetCustomData(this.idUser).subscribe(data => {
        console.log(data);
        this.CustData = data;
        this.refresh();
      }, error => console.log(error)

    );


    this.CardInfos = new FormGroup({
      cardNumber: new FormControl(null, [Validators.required]),
      expMonth: new FormControl(null, Validators.required),
      expYear: new FormControl(null, Validators.required),
      cvc: new FormControl(null, Validators.required),
    });

    this.modifyOn = false;
    this.confirmAlertSet = this.tokenStorage.getUser().confirmAlert;
    this.idUser = this.tokenStorage.getUser().id;
    this.user = new User();
    // this.user = this.tokenStorage.getUser();
    // console.log("user howa hhh"+ this.tokenStorage.getUser().userName);

    this.userService.GetUserById(this.idUser).subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));

    this.userService.GetCustomData(this.idUser).subscribe(data => {
        console.log(data);
        this.CustData = data;
      this.refresh();
      }, error => console.log(error)

    );


    console.log("Chouf el adresse" + this.user.addresse);
    this.userService.GetInvestements(this.idUser).subscribe(
      data => {
       // console.log("data iss"+ data[0].id);
       // console.log("data iss"+ data[0].idUser);
        //console.log("data iss"+ data[0].farm);
        this.listInvests = data;
        console.log("data iss"+ this.listInvests);
      },
      error => console.log(error)
    );
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
          this.newCustData = resp;
          this.CustData = this.newCustData;
          this.refresh();


        }

      },
      error => console.log(error)
    );


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
        this.refresh();
        this.cardDataReload();
        this.modifyOn=false;


        // this.router.navigate(['account']) .then(() => {

         // window.location.reload();
        // });
        // this.refresh();
       // this.cardDataReload();
       // window.location.reload();
        // this.router.navigate(['account']);
        // this.router.navigate(['account'])
         // .then(() => {
           // window.location.reload();
          // });
      } else {
        console.log(response.error.message);
        this.ErrorData = true;
        this.refresh();

      }

      this.userService.GetCustomData(this.idUser).subscribe(data => {
          console.log(data);
          this.CustData = data;
          // console.log("Customer data e jdidd heyaa"+this..lastfour);
        }, error => console.log(error)

      );
      // window.location.reload();
    });
    this.refresh();
    // this.router.navigate(['/account']);
     // .then(() => {
        //  window.location.reload();
        // }
      // );

    console.log("New value of card iss"+this.CustData.lastfour);
    // window.location.reload();
  }

  GetUpdateForm(){
    this.modifyOn = true;
    this.refresh();
  }

  cardDataReload(){

    this.userService.GetCustomData(this.idUser).subscribe(data => {
        console.log(data);
        this.CustData = data;
        console.log("Customer data e jdidd heyaa"+this.newCustData.lastfour);
      }, error => console.log(error)

    );

  }


  openDialog(id: number){

    console.log("id-to-signal-issss"+id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;

    this.dialog.open(CancelInvestDialogComponent, dialogConfig);

  }

}
