import { Component, OnInit } from '@angular/core';
import {PhoneNumber} from '../models/PhoneNumber';
import {WindowService} from '../services/WindowService';
import { environment } from '../../environments/environment';
import Cotter from 'cotter';
import {TokenStorageService} from '../services/token-storage.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

// import * as firebase from 'firebase';


@Component({
  selector: 'app-confirm-identity',
  templateUrl: './confirm-identity.component.html',
  styleUrls: ['./confirm-identity.component.css']
})
export class ConfirmIdentityComponent implements OnInit {

  success = false;
  payload = null;
  payloadString = null;
  user: User;



  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {


    this.user = this.tokenStorage.getUser();


    // ⭐ Show Email Form
    var cotter = new Cotter('2b5db83e-7173-4e10-a2f3-05f903b8dd42'); // 👈 Specify your API KEY ID here
    cotter
      .signInWithLink()
      .showEmailForm()
      .then((payload: object) => {
        this.payload = 'rania.bouteraa@esprit.tn';
        this.success = true;
        this.payload = payload;
        this.payloadString = JSON.stringify(payload, null, 4);
       // console.log("paylodString iss"+)
        this.router.navigate(['/updateMail']);

      })
      .catch((err: any) => console.log(err));

  }






}
