import { Component, OnInit } from '@angular/core';
import {Investissement} from '../models/Investissement';
import {UserService} from '../services/user.service';
import {TokenStorageService} from '../services/token-storage.service';
import {User} from '../models/user.model';
import {InvestService} from '../services/InvestService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-livraison',
  templateUrl: './confirm-livraison.component.html',
  styleUrls: ['./confirm-livraison.component.css']


})



export class ConfirmLivraisonComponent implements OnInit {

  selectedOption: string = '';
  options: any = [

    'confirmer',
    'retarder'

    ];

  ToConfirmList: Investissement[];
  user: User;
  idUser: number;
  content = '' ;


  constructor(private router: Router, private userService: UserService, private tokenStorage: TokenStorageService, private investService: InvestService) { }

  ngOnInit(): void {
    this.idUser = this.tokenStorage.getUser().id;
    this.userService.GetToConfirmList(this.idUser).subscribe(
      data => {

        this.ToConfirmList = data;
        console.log("data iss"+ this.ToConfirmList);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  radioChangeHandler(event: any, inv: Investissement){
    this.selectedOption = event.target.value;

    inv.invAction = this.selectedOption;
    console.log("inv heyaa"+inv);
    console.log("inv action walet"+inv.invAction);
    console.log("selected iss"+this.selectedOption);
    console.log("Inv Action iss"+inv.invAction);
  }

  ManageInv(){
    this.investService.ManageInvests(this.idUser,this.ToConfirmList).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.getUser().confirmAlert = false;
        this.router.navigate(['account'])
          .then(() => {
            window.location.reload();
          });


      },
      error => console.log(error)
    ); }

}
