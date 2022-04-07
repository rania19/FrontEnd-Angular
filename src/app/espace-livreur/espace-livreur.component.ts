import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {AdminService} from '../services/Admin.service';
import {Livraison} from '../models/Livraison';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-espace-livreur',
  templateUrl: './espace-livreur.component.html',
  styleUrls: ['./espace-livreur.component.css',]
})
export class EspaceLivreurComponent implements OnInit {

  listLiv: Livraison[];
  idUser: number;
  currentRate = 3.5;
  user: User;
  constructor(private tokenStorage: TokenStorageService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

    this.user = this.tokenStorage.getUser();
    this.currentRate = this.user.rating;
    console.log("rating of user iss"+this.user.rating);
   this.idUser = this.tokenStorage.getUser().id;
   this.GetListLivraisons();


  }

  GetListLivraisons(){

    this.adminService.GetlistLivraisons(this.idUser).subscribe(
      data => {

        this.listLiv = data;

      //  console.log("investissement mtee loulaa"+this.livraisons[0]);




      },
      error => console.log(error)
    );

  }

  ToDetail(liv: Livraison){
    this.router.navigate(['/livItem', JSON.stringify(liv)]);
  }

}
