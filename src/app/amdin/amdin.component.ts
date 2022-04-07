import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amdin',
  templateUrl: './amdin.component.html',
  styleUrls: ['./amdin.component.css']
})
export class AmdinComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;

  }

}
