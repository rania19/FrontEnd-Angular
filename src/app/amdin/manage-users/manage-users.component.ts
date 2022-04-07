import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

   Allusers: User[];
  searchValue: string;
  term: string;

  dataSource ;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.GetClients().subscribe(
      data => {

       this.Allusers = data;

      },
      error => console.log(error)
    );

    if(this.Allusers){
      this.dataSource =  new MatTableDataSource<User>(this.Allusers);
    }
    this.dataSource.paginator = this.paginator;
  }

  bannUser(){

  }
  ToDetail(id : number){
    this.router.navigate(['/admin/SignDet', id]);

}

}
