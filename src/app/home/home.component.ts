import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
 // currentRating: number;
  currentRating = 3;
  ratingTosend = 3;
  confirmAlertSet: boolean;

  constructor(private router: Router ,private cd: ChangeDetectorRef, private tokenStorage: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {

     this.user = this.tokenStorage.getUser();
   // this.userService.GetUserById(this.tokenStorage.getUser().id).subscribe(
     // data => {
       // if (data != null) {
         //  this.user = data;

        // }


      // },
      // error => console.log(error)
    // );

    console.log("user iss"+this.user);
    // console.log("user is client and roleclient"+ this.user.clientrole);
    console.log("Rate set isss"+ this.user.rateset);
   console.log("confirm alert iss"+this.tokenStorage.getUser().confirmAlert);


  }

  ReloadUser(){
    this.userService.GetUserById(this.tokenStorage.getUser().id).subscribe(
     data => {
     if (data != null) {
      this.user = data;

     }

     },
     error => console.log(error)
     );
  }

  ToConfirmLiv(){

    this.router.navigate(['/confirmLiv']);

  }


  RateLivreur(event: any){
    //this.currentRating = event.target.rate;


    console.log("rate howa"+ this.currentRating);
    console.log("Tekhdem el function");
    this.userService.RateLivreur(this.tokenStorage.getUser().id, this.currentRating).subscribe(
      data => {
        if (data != null) {
          console.log("data is"+data);
          this.ReloadUser();

        }

      },
      error => console.log(error)
    );




  }

  refresh() {
    this.cd.detectChanges();
  }

}
