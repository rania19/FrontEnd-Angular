import {ChangeDetectorRef, Component} from '@angular/core';
import {TokenStorageService} from './services/token-storage.service';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontDev';
  user: User;
  idUser: number;
  roleuser = ['ROLE_USER'];


  constructor(private tokenStorage: TokenStorageService, private cd: ChangeDetectorRef) {

  }
  ngOnInit(): void {
   // this.user = this.tokenStorage.getUser().authorities;
    this.idUser = this.tokenStorage.getUser().id;
    console.log("roleee howaaa"+ this.tokenStorage.getUser().authorities);



  }
}
