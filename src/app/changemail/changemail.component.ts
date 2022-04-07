import { Component, OnInit } from '@angular/core';
import Cotter from 'cotter';
import {TokenStorageService} from '../services/token-storage.service';
import {Router} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../models/user.model';


@Component({
  selector: 'app-changemail',
  templateUrl: './changemail.component.html',
  styleUrls: ['./changemail.component.css']
})
export class ChangemailComponent implements OnInit {
  success = false;
  payload = null;
  payloadString = null;
  newemail: string;
  user: User;

  idUser: number;
  changeEmailForm: FormGroup;
  constructor(private userService: UserService,private tokenStorage: TokenStorageService, private router: Router) {
  }


  ngOnInit() {

    this.changeEmailForm = new FormGroup({
      newemail: new FormControl(null, [Validators.required, Validators.email]),
      }

    );


    this.idUser = this.tokenStorage.getUser().id;


  }
  onSubmit(){
    this.updateEmail();

  }

  updateEmail(){

    this.userService.UpdateEmail(this.idUser, this.newemail).subscribe(
      data => {
        this.tokenStorage.saveUser(data);
        console.log(data);
        this.router.navigate(['/account']);

      });


  }

}
