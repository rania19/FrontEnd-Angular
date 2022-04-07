import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProductElement} from '../../../models/ProductElement';
import {Farm} from '../../../farm/models/farm.model';
import {FarmService} from '../../../farm/services/farm.service';
import {InvestService} from '../../../services/InvestService';
import {TokenStorageService} from '../../../services/token-storage.service';
import {loadStripe} from '@stripe/stripe-js/pure';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {InvestRequest} from '../../../models/InvestRequest';

@Component({
  selector: 'app-propositions-item',
  templateUrl: './propositions-item.component.html',
  styleUrls: ['./propositions-item.component.css']
})
export class PropositionsItemComponent implements OnInit {

  propSelected: ProductElement[];
  idFarm: number;
  user: User;
  idUser: number;
  farm: Farm;
  amountfinal: number;
  paymentDone: boolean;
  InvInter: InvestRequest;
  investRequest: InvestRequest;

  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private cd: ChangeDetectorRef,private route: ActivatedRoute, private farmService: FarmService, private investService: InvestService, private tokenStorage: TokenStorageService, private router: Router, private http: HttpClient,private userService: UserService) {


  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parms: Params) => {
        this.amountfinal = +parms['amount'];
      }
    );
    console.log("amount is " + this.amountfinal);

    this.userService.GetUserById(this.tokenStorage.getUser().id).subscribe(
      data => {
        this.user = data;
        console.log("User is   " + this.user.id);
      }

    );


    this.propSelected =JSON.parse(this.route.snapshot.params['prop']);
    console.log("Selected one iss" + this.propSelected);


    this.route.params.subscribe(
      (parms: Params) => {
        this.idFarm = +parms['idFarm'];
      }
    );
    console.log("farm id is" + this.idFarm);
    this.getFarmTitle();


  }
  getFarmTitle(){

    this.farmService.GetSelectedFarm(this.idFarm).subscribe(
      data => {
        this.farm = data;
        console.log("Data  is   " + data);
        //  console.log(" F is   "+this.f);
        // this.farm = new Farm(this.f.id,this.f.nomF,this.f.descriptionF,this.f.imageF,this.f.region);
        console.log("Farm " + this.farm);
      }
    );

  }


  PayWithoutCardAsking() {
    // this.tokenTosend = token;
    // this.InvInter = this.CardInfos.value;
    this.investRequest = new InvestRequest(this.propSelected ,this.amountfinal, "", 0,0 , 0);
    this.idUser = this.tokenStorage.getUser().id;
    const formData = new FormData();
    const invReq = this.investRequest;

    formData.append('invReq', JSON.stringify(invReq));


    this.http.post (`http://localhost:8081/api/v1/SubscribeExistantCust/` + `${this.idFarm}` + `/` + `${this.idUser}`, formData)
      .subscribe(resp => {
        console.log(resp);
        if (resp != null){
          console.log(" response not null and entred to invest");
          this.paymentDone = true;
          this.refresh();
          console.log(this.paymentDone);
          this.router.navigate(['account'])
            .then(() => {
              window.location.reload();
            }).then(() => {
              window.location.reload();
            }

          );
        }
        if (resp == null){
          console.log(" Fama ghamltaa");

          // });

        }

      });
  }


  refresh() {
    this.cd.detectChanges();
  }

  SetInvest()  {
    console.log("Farm id befor sending itt"+this.idFarm);

    console.log("user howa"+this.user.id);
    console.log("user has invest  howa"+this.user.hasinvest);
    if (this.user.hasinvest === false) {
      this.router.navigate(['/pay', this.idFarm, JSON.stringify(this.propSelected), this.amountfinal]);
    }

    if (this.user.hasinvest === true) {
      this.PayWithoutCardAsking();
    }

  // });
}


}
