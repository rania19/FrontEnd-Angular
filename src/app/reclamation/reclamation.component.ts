import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Reclamation} from '../models/Reclamation';
import {ReclamationService} from '../services/Reclamation.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BannDialogComponent} from '../bann-dialog/bann-dialog.component';
import {DeleteRecDialogComponent} from '../delete-rec-dialog/delete-rec-dialog.component';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  Reclist: Reclamation[];
  term: string;
  selectedDate: Date;

  constructor(public dialog: MatDialog, private reclamationService: ReclamationService, private cd: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.getReclamations();
    this.refresh();

  }
  radioChangeHandler(event: any){

    this.selectedDate = event;

    console.log("SelectedDateisss"+ this.selectedDate);


  }
  OnDateChange(){

    console.log("Date tbadlet b date jdida"+this.selectedDate);
    this.reclamationService.getReclamationsByDate(this.selectedDate).subscribe(
      (response) => {
        this.Reclist = response;

        if (this.Reclist){
          console.log("listeeee iss"+this.Reclist);
          console.log("premiereeee"+this.Reclist[0]);
        }
      },
      error => console.log(error)

    );


  }

  OpenDeleteDialog(id: number){
    console.log("id-to-signal-issss"+id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;

    this.dialog.open(DeleteRecDialogComponent, dialogConfig);

  }

  refresh() {
    this.cd.detectChanges();
  }

  getReclamations(){
    this.reclamationService.getReclamations().subscribe(
      (response) => {
        this.Reclist = response;

        if (this.Reclist){
          console.log("listeeee iss"+this.Reclist);
          console.log("premiereeee"+this.Reclist[0]);
        }
      },
      error => console.log(error)
    );
  }

}
