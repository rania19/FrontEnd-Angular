import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReclamationService} from '../services/Reclamation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-rec-dialog',
  templateUrl: './delete-rec-dialog.component.html',
  styleUrls: ['./delete-rec-dialog.component.css']
})
export class DeleteRecDialogComponent implements OnInit {
  idRec: number;

  constructor(private router: Router,private reclamationService: ReclamationService, private dialogRef: MatDialogRef<DeleteRecDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.idRec = data;
    console.log("data isss"+data);
    console.log("IdRec howaa"+ this.idRec);
  }

  ngOnInit(): void {

  }

  SupprimerRec(){
    this.reclamationService.RemoveRec(this.idRec).subscribe(
      data => {

        console.log("Data  is  " + data);
        this.dialogRef.close();

        window.location.reload();

      },
      error => console.log(error)
    );


  }

}
