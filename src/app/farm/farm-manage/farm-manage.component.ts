import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FarmService} from '../services/farm.service';
import {TokenStorageService} from '../../services/token-storage.service';

import {FeedbackService} from '../../services/Feedback.service';
import {FeedbackModel} from '../../models/Feedback.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignalDialogComponent} from '../../signal-dialog/signal-dialog.component';
import {User} from '../../models/user.model';
import {Farm} from '../../models/Farm';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-farm-manage',
  templateUrl: './farm-manage.component.html',
  styleUrls: ['./farm-manage.component.css']
})
export class FarmManageComponent implements OnInit {
  commentForm: FormGroup;
  f: Farm;
  idfarm:number;
  farm: Farm ;
  user: User;
  farmexist: boolean;
  review: string;
  idUser: number;
  IsFarmExist = false;
  listfeedbacks : FeedbackModel[];
  feedback: FeedbackModel;
  UpdateON: boolean;

  constructor(private userService: UserService,public dialog: MatDialog,private feedbackService: FeedbackService,private farmService: FarmService, private tokenStorage: TokenStorageService, private cd: ChangeDetectorRef, private router:Router) { }

  FarmUpdate(){
  this.UpdateON = true;
  this.router.navigate(['/updateFarm',this.f.id]);
  }
  refresh() {
    this.cd.detectChanges();
  }
  ngOnInit(): void {

      this.refresh();
      this.IsFarmExist = false;
    this.farmExist();
    this.UpdateON = false;

    // this.user = this.tokenStorage.getUser();


    //console.log("farmexist chouuff"+this.user.farmexist);
    this.commentForm = new FormGroup(
      {
        review: new FormControl(null, Validators.required),
      }
    );
     this.userService.GetUserById(this.tokenStorage.getUser().id).subscribe(
       data => {
         this.user = data;



       },
       error => console.log(error)
     );

    this.farmOfUser();
    this.idUser = this.tokenStorage.getUser().id;
    this.getFeedbacks(this.farm.id);
    this.farmexist = false;
    this.f = new Farm(null,null,null);
    console.log("farm avant   "+this.farm);
  //  this.farm =  new  Farm(null,null,null,null,null);


   // this.farm = new Farm(this.f.id, this.f.nomF,this.f.descriptionF,this.f.imageF,this.f.region);
  //  console.log("farm is"+this.farm);
   // console.log("farm id"+this.farm.id);
  //  console.log("farm id"+this.farm.nomF);
  //  console.log("farm issss"+this.farm);
    console.log("farm apres   "+this.farm);


  }

  reloadData(){
    this.feedbackService.GetFeedback(this.farm.id).subscribe(

      data => {
        this.listfeedbacks = data;
        this.refresh();
        console.log("feedbacks  is  " +this.listfeedbacks);

      },
      error => console.log(error)
    );
  }
  onSubmit(){
    this.Addcomment();

  }



  farmOfUser() {
    this.farmService.getFarmOfUser(this.tokenStorage.getUser().id).subscribe(
      data => {



        this.f = data;
        this.idfarm = this.f.id;
        this.getFeedbacks(this.idfarm);
        console.log("Data  is   "+data);
        console.log(" F is   "+this.f);
        this.farm = new Farm(this.f.nomF,this.f.descriptionF,this.f.region);
        this.farm.id = this.f.id;
        console.log("Farm farm apres remp isss"+this.farm);
      }
    );

      }


      getFeedbacks(idFarm: number){
      this.feedbackService.GetFeedback(idFarm).subscribe(
        data => {
          this.listfeedbacks = data;
          this.refresh();
          console.log("Data  is  " +data);

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
  openDialog(id: number){

    console.log("id-to-signal-issss"+id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;

    this.dialog.open(SignalDialogComponent, dialogConfig);

  }

  Addcomment(){
    // this.review = this.commentForm.value;
    console.log("review iss"+ this.review);


    this.feedbackService.SetComment(this.farm.id, this.idUser, this.review).subscribe
    (
      data => {
        if (data != null) {
          this.refresh();
          // this.appRef.tick ();
          this.reloadData();

        }


      },
      error => console.log(error));

  }

  farmExist() {
    console.log('tawaaa');
    this.farmService.getFarmOfUser(this.tokenStorage.getUser().id).subscribe(
      data => {
        console.log("data isssss"+ data);
        if (data !== null){
          this.IsFarmExist =true;
          console.log("entreedto data not null"+data);

        }
        else{
          console.log('null');
        }
      }
    );
  }

}
