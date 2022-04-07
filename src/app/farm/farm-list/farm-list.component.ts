import { Component, OnInit } from '@angular/core';

import {FarmService} from '../services/farm.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Farm} from '../models/farm.model';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  listFarm: Farm[];
  term: string;

  constructor(private farmService: FarmService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getFarms();

  }




  getFarms(){
    this.farmService.getFarmsForClientToInvest(this.tokenStorage.getUser().id).subscribe(
      (response) => {
         this.listFarm = response;
        //this.listFarm.push(response);
        if (this.listFarm){
          console.log("listeeee iss"+this.listFarm);
          console.log("premiereeee"+this.listFarm[0]);
        }
      },
    error => console.log(error));

  }

}
