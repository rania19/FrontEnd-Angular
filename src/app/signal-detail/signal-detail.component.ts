import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AdminService} from '../services/Admin.service';
import {User} from '../models/user.model';
import {Signal} from '../models/Signal';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SignalDialogComponent} from '../signal-dialog/signal-dialog.component';
import {BannDialogComponent} from '../bann-dialog/bann-dialog.component';

@Component({
  selector: 'app-signal-detail',
  templateUrl: './signal-detail.component.html',
  styleUrls: ['./signal-detail.component.css']
})
export class SignalDetailComponent implements OnInit {

  id: number;
  user: User;
  spamSignal: Signal[];
  ViolenceSignal: Signal[];
  FauxInfosSignal: Signal[];
  HarcelementSignal: Signal[];
  headerOn: boolean;
  banned: boolean;

  constructor(private cd: ChangeDetectorRef, public dialog: MatDialog,private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.banned = true;
    this.headerOn = false;
    this.route.params.subscribe(
      (parms: Params) => {
        this.id = +parms['id'];
      }
    );
    console.log (" User to See his details iss " + this.id);
    if(this.id != null){
      this.GetUSer(this.id);




      this.GetHarcelementSignal(this.id);
      this.GetSpamSignal(this.id);
      this.GetViolenceSignal(this.id);
      this.GetFausseInfSignal(this.id);
     // console.log("Banned value iss"+this.user.banned);




    }


  }

  refresh() {
    this.cd.detectChanges();
  }

  GetUSer(id: number){
    this.adminService.GetUserInfos(id).subscribe(

      data => {
        this.user = data;
        console.log(data);
        this.banned = this.user.banned;
        console.log("User is banned yes or no"+this.banned);
        console.log("banned iss"+this.banned);
        this.refresh();


      },
      error => console.log(error)
    );
  }

  GetSpamSignal(id: number){
    this.adminService.GetSpamSignal(id).subscribe(

      data => {
        this.spamSignal = data;
        console.log(data);


      },
      error => console.log(error)

    );

  }


  GetViolenceSignal(id: number){
    this.adminService.GetViolenceSignal(id).subscribe(

      data => {
        this.ViolenceSignal = data;
        console.log(data);


      },
      error => console.log(error)

    );

  }



  GetHarcelementSignal(id: number){
    this.adminService.GetHarcelementSignal(id).subscribe(

      data => {
        this.HarcelementSignal = data;
        console.log(data);


      },
      error => console.log(error)

    );

  }

  GetFausseInfSignal(id: number){
    this.adminService.GetFausseInfosSignal(id).subscribe(

      data => {
        this.FauxInfosSignal = data;
        console.log(data);


      },
      error => console.log(error)

    );

  }


  isHeaderVisible(){
    if (this.ViolenceSignal.length >= 0){
      this.headerOn = true ;


    }
    else {
      this.headerOn = false;
    }
    return this.headerOn;
  }


  openDialog(id: number){

    console.log("id-to-signal-issss"+id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;

    this.dialog.open(BannDialogComponent, dialogConfig);

  }



}
