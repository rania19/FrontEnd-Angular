import { Component, OnInit } from '@angular/core';
import {FarmService} from './services/farm.service';
import {Farm} from './models/farm.model';
import {TokenStorageService} from '../services/token-storage.service';
import {parseJsonSchemaToCommandDescription, parseJsonSchemaToOptions} from '@angular/cli/utilities/json-schema';
import {User} from '../models/user.model';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  confirmAlertSet: boolean;
  user: User;
  userid: number;
  content = '';
  IsFarmExist = false;
  f: Farm;
  roles: string[] = [];
  UserOn: boolean;
  AdminOn: boolean;

  constructor(private farmService: FarmService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {

      this.roles = this.tokenStorage.getUser().roles;
    }
    if (this.tokenStorage.getUser().roles == "ROLE_ADMIN") {
      console.log("dkhal lel admin");
      this.AdminOn = true;
      this.UserOn = false;
    }



    //this.roles = this.tokenStorage.getUser().roles;
    this.user = this.tokenStorage.getUser();
    console.log("el user howaaa"+this.user.clientrole);
    console.log("role houamaaa chouff"+ this.tokenStorage.getUser().roles);




    this.confirmAlertSet = this.tokenStorage.getUser().confirmAlert;
    this.farmExist();


    this.farmService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  farmExist() {
    console.log('tawaaa');
    this.farmService.getFarmOfUser(this.tokenStorage.getUser().id).subscribe(
      data => {
        console.log("data isssss"+ data);
        if (data !== null){
          this.IsFarmExist =true;
           console.log("entreedto data not null"+data);

        }
        else{
          console.log('null');
        }
      }
    );
  }
}
