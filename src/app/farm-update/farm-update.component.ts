import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {FarmService} from '../farm/services/farm.service';
import {Farm} from '../models/Farm';
import {TokenStorageService} from '../services/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-farm-update',
  templateUrl: './farm-update.component.html',
  styleUrls: ['./farm-update.component.css']
})
export class FarmUpdateComponent implements OnInit {
  id: number;
  farm: Farm;
  updateFarmForm: FormGroup;
  constructor(private router: Router, private tokenStorage: TokenStorageService, private route: ActivatedRoute, private userService: UserService, private farmService: FarmService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parms: Params) => {
        this.id = +parms['id'];
      }
    );
    console.log (" User to See his details iss " + this.id);
    this.farmOfUser();
    this.updateFarmForm = new FormGroup({
      nomF: new FormControl(null, Validators.required),
      descriptionF: new FormControl(null, Validators.required),
      region: new FormControl(null, Validators.required),
    });
  }

  farmOfUser() {
    this.farmService.getFarmOfUser(this.tokenStorage.getUser().id).subscribe(
      data => {



        this.farm = data;

        console.log("Farm farm apres remp isss"+this.farm);
      }
    );

  }
  onSubmit(){

    this.updateFarm();
  }


  updateFarm(){
    this.userService.updateFarm(this.farm.id,this.farm).subscribe(
      data => {
        console.log(data);
        this.farm = data;
        console.log("okeyy");
        this.router.navigate(['/farm-manage']);
       // window.location.reload();

      }, error => console.log(error)
    );

  }

}
