import {Component, Inject, OnInit} from '@angular/core';
import {Investissement} from '../models/Investissement';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Signal} from '../models/Signal';
import {TokenStorageService} from '../services/token-storage.service';
import {User} from '../models/user.model';
import {FeedbackService} from '../services/Feedback.service';

@Component({
  selector: 'app-signal-dialog',
  templateUrl: './signal-dialog.component.html',
  styleUrls: ['./signal-dialog.component.css']
})
export class SignalDialogComponent implements OnInit {
  options: any = [

    'Violence',
    'Harcélement',
    'Fausse_information',
    'Spam'

  ];
  selectedOption: string = '';
  idfeed: number;
  s: Signal;
  user: User;
  idUser: number;

  constructor(private feedbackService: FeedbackService, private tokenStorage: TokenStorageService,private dialogRef: MatDialogRef<SignalDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
     this.idfeed = data;
     console.log("data isss"+data);
    console.log("IdFeed howaa"+ this.idfeed);

  }



  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.idUser = this.tokenStorage.getUser().id;
    console.log("LoggedUser iss"+this.idUser);
    this.s = new Signal(null);
  }

  radioChangeHandler(event: any){
    this.selectedOption = event.target.value;
     console.log("option iss"+ this.selectedOption);


  }

  SignalUser(){
    console.log("Begin Signal");
    this.s.reportReason = this.selectedOption;

    console.log("Reason iss"+ this.selectedOption);
    console.log("User iss"+ this.idfeed);
    this.feedbackService.SetSignal(this.idUser, this.idfeed, this.s).subscribe(

      data => {
        console.log("signal iss"+data);
        this.dialogRef.close();
      },
      error => console.log(error)

    );
  }
}
