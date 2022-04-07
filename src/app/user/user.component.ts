import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {User} from '../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   idUser: number;
   user: User;
   UpdateUserForm: FormGroup;

  constructor(private tokenStorage: TokenStorageService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {


    this.UpdateUserForm = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        mdp: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        addresse: new FormControl(null, Validators.required),
      });

    this.idUser = this.tokenStorage.getUser().id;
    this.user = new User();
    this.userService.GetUserById(this.idUser).subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));
    console.log("username iss"+this.user.userName);
    console.log("iduseris"+this.idUser);
  }

    updateUser(){
    this.userService.updateUser(this.idUser,this.user).subscribe(data => {
      console.log(data);
      this.user = data;
      this.router.navigate(['account']);
      // window.location.reload();

    }, error => console.log(error));

    }


  onSubmit(){

    this.updateUser();


  }


}
