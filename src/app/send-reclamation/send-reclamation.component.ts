import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../services/token-storage.service';
import {ReclamationService} from '../services/Reclamation.service';
import {Reclamation} from '../models/Reclamation';
import {Router} from '@angular/router';
import {Common} from '../models/common';

@Component({
  selector: 'app-send-reclamation',
  templateUrl: './send-reclamation.component.html',
  styleUrls: ['./send-reclamation.component.css']
})
export class SendReclamationComponent implements OnInit {

   recsnumb;
   com: Common;
   SendReclamation: FormGroup;
   idUser: number;
   rec: Reclamation;
   reclamation: Reclamation;
  isSuccessful: boolean;

  constructor(private tokenStorage: TokenStorageService, private reclamationService: ReclamationService, private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
     this.com = new Common();

     this.isSuccessful = false;
    this.SendReclamation = new FormGroup({
      object: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });

    this.idUser = this.tokenStorage.getUser().id;
    console.log("id user isss"+this.idUser);
  }

  refresh(){
    this.cd.detectChanges();
  }

  onSubmit(){
    this.rec = this.SendReclamation.value;
    this.reclamation = new Reclamation(this.rec.object, this.rec.content);
    console.log("id user isss"+this.idUser);
    this.reclamationService.SendReclamation(this.idUser, this.reclamation).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.reclamationService.AddNews(1,this.com).subscribe(

        );

        console.log();

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 3000);  //5s

        },
      error => console.log(error)

    );

  }

}
