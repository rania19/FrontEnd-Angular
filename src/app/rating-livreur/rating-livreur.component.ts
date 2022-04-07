import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-livreur',
  templateUrl: './rating-livreur.component.html',
  styleUrls: ['./rating-livreur.component.css']
})
export class RatingLivreurComponent implements OnInit {

  currentRating: number;
  constructor() { }

  ngOnInit(): void {
  }

}
