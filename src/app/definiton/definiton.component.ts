import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-definiton',
  templateUrl: './definiton.component.html',
  styleUrls: ['./definiton.component.css']
})
export class DefinitonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLogin(){
    this.router.navigate(['/login']);

  }
  toRegister(){
    this.router.navigate(['/register']);
  }
  todef(){
    this.router.navigate(['/def']);
  }
}
