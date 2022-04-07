import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {Investissement} from '../models/Investissement';

@Component({
  selector: 'app-farm-invests',
  templateUrl: './farm-invests.component.html',
  styleUrls: ['./farm-invests.component.css']
})
export class FarmInvestsComponent implements OnInit {
  content = '' ;
  Farminvests: Investissement[];
  user: User;
  idUser: number;


  constructor(private tokenStorage: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.idUser = this.tokenStorage.getUser().id;
    this.user = this.tokenStorage.getUser();
    console.log("Ahna f invests farm w chouf el role"+this.user.clientrole);
    this.GetFarmInvests();
  }

  GetFarmInvests(){
    console.log("EL fonction atwa");
    this.userService.GetFarmsInvests(this.idUser).subscribe(
      data => {
        console.log("tawa service");
        this.Farminvests = data;
        console.log("invests lel firma"+this.Farminvests);



      },
      err => {
        this.content = JSON.parse(err.error).message;
      }


    );

  }

}
