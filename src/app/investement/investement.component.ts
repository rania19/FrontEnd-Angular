import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Farm} from '../farm/models/farm.model';
import {FarmService} from '../farm/services/farm.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InvestService} from '../services/InvestService';
import {ProductElement} from '../models/ProductElement';


@Component({
  selector: 'app-investement',
  templateUrl: './investement.component.html',
  styleUrls: ['./investement.component.css']
})
export class InvestementComponent implements OnInit {
  idFarm: number;
  farm: Farm;
  amounttosend: number;
  Propositions: ProductElement[][];
  Getprop: FormGroup;


  constructor(private route: ActivatedRoute, private farmService: FarmService, private investService: InvestService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parms: Params) => {
        this.idFarm = +parms['id'];
      }
    );
    console.log("farm id is" + this.idFarm);
    this.getFarmTitle();

    this.Getprop = new FormGroup({amount: new FormControl(null, Validators.required)});

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

  onSubmit() {

   this.investService.GetPropositions(this.idFarm, this.amounttosend).subscribe(
     (response) => {
       this.Propositions = response;


       if (this.Propositions){
         console.log("listeeee iss"+this.Propositions);
         console.log("Amount iss"+this.amounttosend );

         console.log("premiereeee"+this.Propositions[0][0]);
       }
     },
     error => console.log(error)
   );

  }
}
