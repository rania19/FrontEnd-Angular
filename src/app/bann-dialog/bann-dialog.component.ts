import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {animationFrameScheduler} from 'rxjs';
import {AdminService} from '../services/Admin.service';
import {BannRequest} from '../models/BannRequest';
import {Router} from '@angular/router';


@Component({
  selector: 'app-bann-dialog',
  templateUrl: './bann-dialog.component.html',
  styleUrls: ['./bann-dialog.component.css']
})
export class BannDialogComponent implements OnInit {

  options: any = [

    'trois_jours',
    'neuf_jours',
    'douze_jours'


  ];
  selectedOption: string = '';
  bannrequest: BannRequest;
  idUser: number;
  constructor(private router: Router, private adminService: AdminService, private dialogRef: MatDialogRef<BannDialogComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.idUser = data;
    console.log("data isss"+data);
    console.log("this dialog is to bann userrr"+ this.idUser);
  }

  ngOnInit(): void {
    this.bannrequest = new BannRequest();

  }


  radioChangeHandler(event: any){
    this.selectedOption = event.target.value;
    this.bannrequest.bannperiod = this.selectedOption;
    console.log("option iss"+ this.selectedOption);


  }
  bannUser()
        {

    this.adminService.BannUser(this.idUser, this.bannrequest).subscribe(

      data => {
        console.log(data);
        this.dialogRef.close();
        this.router.navigate(['/admin/ManageUsers']);

      },
      error => console.log(error)

    );
  }


}
