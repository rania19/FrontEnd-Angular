import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  @Output()
  toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {

  }

  toggleSideBar(){
   this.toggleSideBarForMe.emit();
  }

  Deconnect(){
    this.tokenStorage.signOut();
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });

  }
}
