import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Params, Router} from '@angular/router';
import {InvestService} from '../services/InvestService';
import {ProductElement} from '../models/ProductElement';
import {TokenStorageService} from '../services/token-storage.service';


@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.css']
})
export class PropositionsComponent implements OnInit {
  @Input()
  prop: ProductElement[];
  Selectedprop: ProductElement[];
  @Input()
  IdFarm: number;
  @Input()
  amount: number;

  constructor(private route: ActivatedRoute, private router: Router, private investService: InvestService, private tokenStorage: TokenStorageService) {

  }

  ngOnInit(): void {


    console.log("proppppp" + this.prop);
    console.log("id farm iss" + this.IdFarm);


  }

  Invest(proposition: ProductElement[]) {
    this.Selectedprop = proposition;
    console.log(proposition);
    console.log("props iss" + proposition);
    console.log("props iss" + proposition[0]);
    console.log("amount 9bal mayabaath howaa"+ this.amount);
    this.router.navigate(['/propItem', JSON.stringify(this.Selectedprop), this.IdFarm, this.amount] );
  }
}
