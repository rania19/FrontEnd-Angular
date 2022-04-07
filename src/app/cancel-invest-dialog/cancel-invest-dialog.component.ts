import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../services/user.service';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-cancel-invest-dialog',
  templateUrl: './cancel-invest-dialog.component.html',
  styleUrls: ['./cancel-invest-dialog.component.css']
})
export class CancelInvestDialogComponent implements OnInit {

    idInvest: number;
    idUser: number;
  constructor(private tokenStorage: TokenStorageService,private userService: UserService, private router: Router, private dialogRef: MatDialogRef<CancelInvestDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {

    this.idInvest = data;
    console.log("data isss"+data);
    console.log("this dialog is to bann userrr"+ this.idInvest);
    this.idUser = this.tokenStorage.getUser().id;
  }

  ngOnInit(): void {
  }

  cancelInvest(){
   this.userService.CancelSubscription(this.idInvest,this.idUser).subscribe(
     data => {

       console.log("data  is  " + data);
       this.router.navigate(['account']).then(() => {
         window.location.reload();
       });

     },
     error => console.log(error)
   )
  }

}
