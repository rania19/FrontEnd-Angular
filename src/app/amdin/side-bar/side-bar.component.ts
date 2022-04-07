import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../models/user.model';
import {Common} from '../../models/common';
import {ReclamationService} from '../../services/Reclamation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  idUser: number;
  user: User;
  news: number;
  com : Common;
  constructor(private router: Router,private cd: ChangeDetectorRef,private reclamationService: ReclamationService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.com = new Common();
    this.idUser = this.tokenStorage.getUser().id;
    this.user = this.tokenStorage.getUser();

    console.log("Newsss houmaa"+this.news);

    this.reclamationService.getNews().subscribe(


      data => {
        console.log(data);
        console.log("data is"+data);
        this.com = data;


      },
      error => console.log(error)

    );
  }

  refresh() {
    this.cd.detectChanges();
  }

  reloadData(){
    this.reclamationService.getNews().subscribe(
      data => {
         this.com = data;
        this.refresh();


      },
      error => console.log(error)

    );

  }

  OnClick(){
    this.reclamationService.ResetNews(1,this.com).subscribe(
      data => {
        console.log(data);
        console.log("data is"+data);
        this.com = data;
        this.reloadData();
        this.router.navigate(['/admin/reclamations']);


      },
      error => console.log(error)
    );
  }

}
