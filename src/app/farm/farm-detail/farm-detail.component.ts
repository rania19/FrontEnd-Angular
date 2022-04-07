import {ApplicationRef, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FarmService} from '../services/farm.service';
import {Farm} from '../models/farm.model';
import {TokenStorageService} from '../../services/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FeedbackService} from '../../services/Feedback.service';
import {FeedbackModel} from '../../models/Feedback.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignalDialogComponent} from '../../signal-dialog/signal-dialog.component';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css']
})
export class FarmDetailComponent implements OnInit {
  idFarm: number;
  farm: Farm;
  SignalOn: boolean;
  idUser: number;
  commentForm: FormGroup;
  review: string;
  user: User;
  feedbacks: FeedbackModel[];
  SignaledFeed: FeedbackModel[];
  currentRate = 0;

  constructor(public dialog: MatDialog, private appRef: ApplicationRef,private feedbackService: FeedbackService,private route: ActivatedRoute, private farmService: FarmService, private tokenStorage: TokenStorageService, private cd: ChangeDetectorRef)
  { }

  ngOnInit(): void {

    this.getFeedbacks();
    this.SignalOn = true;
    this.commentForm = new FormGroup(
      {
        review : new FormControl(null, Validators.required),
      }
    );

     this.user  = this.tokenStorage.getUser();
    this.idUser = this.tokenStorage.getUser().id;
    console.log("iduser isssssssssssssssssssssssss"+ this.idUser);

    this.route.params.subscribe(
      (parms: Params) => {
        this.idFarm = +parms['id'];
      }
    );

    this.getFeedbacks();
    this.GetSignaledFeed();
    console.log("farm id is"+this.idFarm);

    this.getSelectedFarm();
  }

  reloadData(){
  this.feedbackService.GetFeedback(this.idFarm).subscribe(

    data => {
      this.feedbacks = data;
      this.refresh();
      console.log("feedbacks  is  " +this.feedbacks);

    },
    error => console.log(error)
  );
  }


  getFeedbacks(){
     this.feedbackService.GetFeedback(this.idFarm).subscribe(
       data => {
         this.feedbacks = data;
         this.refresh();
         console.log("feedbacks  is  " +this.feedbacks);

       },
       error => console.log(error)
     );

  }

  deleteFeed(idfeed: number){
    this.feedbackService.DeleteFeed(idfeed).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        // }
      }
    );
  }


  getSelectedFarm(){
    this.farmService.GetSelectedFarm(this.idFarm).subscribe(
      data => {
        this.farm = data;
        console.log("Data  is   "+data);
      //  console.log(" F is   "+this.f);
       // this.farm = new Farm(this.f.id,this.f.nomF,this.f.descriptionF,this.f.imageF,this.f.region);
        console.log("Farm farm apres remp isss"+this.farm);
      }
    );

  }

  onSubmit(){
    this.Addcomment();

  }

  refresh() {
    this.cd.detectChanges();
  }

  Addcomment(){
   // this.review = this.commentForm.value;
    console.log("review iss"+ this.review);


    this.feedbackService.SetComment(this.idFarm, this.idUser,this.review).subscribe
    (
      data => {
        if (data != null) {
          this.refresh();
          this.appRef.tick ();
         this.reloadData();

        }


      },
        error => console.log(error));

  }



  // Signal-Treatment/////////////////

  openDialog(id: number){

    console.log("id-to-signal-issss"+id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;

    this.dialog.open(SignalDialogComponent, dialogConfig);

  }
  // //////////////////////////////////////////


  GetSignaledFeed(){
    this.feedbackService.GetSignaledFeedByUSer(this.idUser).subscribe(

      data => {
        this.SignaledFeed = data;
        this.refresh();
        console.log("feedbacks  is  " + this.SignaledFeed);

      },
      error => console.log(error)

    );
  }

  Initialize(){
    this.SignalOn = true;
    console.log("Tawa signal mloul true");


  }

  checkIfFeedbackSIgnaled(feedback: FeedbackModel , SignaledFeed: FeedbackModel){
    console.log("Dkhal f check");
   if (feedback.id === SignaledFeed.id) {
     console.log("Dkhal w l9ah nafsouuuu");
     this.SignalOn = false;
   }


  }

}
