import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/Admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientsNumber: number;
  LivreurNumber: number;
  FarmsNumber: number;
  InvestsNumber: number;



  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
     this.GetClientsNumber();
     this.GetFarmsNumber();
     this.GetLivreurNumber();
     this.GetInvestsNumber();
  }


  GetClientsNumber(){
    this.adminService.GetCLientsNumber().subscribe(
      data => {

        this.clientsNumber = data;

      },
      error => console.log(error)
    );

  }

  GetFarmsNumber(){
    this.adminService.GetFarmsNumber().subscribe(
      data => {

        this.FarmsNumber = data;

      },
      error => console.log(error)

    );
  }


  GetLivreurNumber(){
    this.adminService.GetLivreursNumber().subscribe(
      data => {

        this.LivreurNumber = data;

      },
      error => console.log(error)

    );
  }

  GetInvestsNumber(){
    this.adminService.GetInvestsNumber().subscribe(
      data => {

        this.InvestsNumber = data;

      },
      error => console.log(error)

    );
  }





}
