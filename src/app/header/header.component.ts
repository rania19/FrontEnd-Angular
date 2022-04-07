import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FarmService} from '../farm/services/farm.service';
import {TokenStorageService} from '../services/token-storage.service';
import {UserService} from '../services/user.service';
import {interval} from 'rxjs';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idUser: number;
   IsFarmExist = false;
   id:number;
   user: User;
  roles: string[] = [];



  constructor(private farmService: FarmService, private tokenStorage: TokenStorageService, private userService: UserService, private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {


    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      console.log("roles  headre houma"+ this.roles);
      console.log("Role loula"+ this.roles[0]);
      if(this.roles[0] ==='ROLE_ADMIN'){
        console.log("Inshalah role admin"+ this.roles);
      }

    }


   // this.idUser = this.tokenStorage.getUser().id;
   //  this.farmExist();
     this.user = this.tokenStorage.getUser();
     // console.log("user clientRole howa"+this.user.clientrole);
     this.refresh();


  }

  refresh() {
    this.idUser = this.tokenStorage.getUser().id;



    this.cd.detectChanges();
  }

  Deconnect(){
    this.tokenStorage.signOut();
    this.router.navigate([''])
       .then(() => {
         window.location.reload();
      });

  }

  //farmExist() {
   // console.log('tawaaa');
    // this.farmService.getFarmOfUser(this.tokenStorage.getUser().id).subscribe(
      // data => {
       // console.log("data isssss"+ data);
       // if (data !== null){
         // this.IsFarmExist =true;
         // console.log("entreedto data not null"+data);

         // }
       // else{
         // console.log('null');
        // }
     // }
   // );
  /// }


}
