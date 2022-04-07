import {Component, Input, OnInit} from '@angular/core';
import {ProductElement} from '../../models/ProductElement';

@Component({
  selector: 'app-propositions-list',
  templateUrl: './propositions-list.component.html',
  styleUrls: ['./propositions-list.component.css']
})
export class PropositionsListComponent implements OnInit {
   @Input()
   propE: ProductElement;
   unity: string;



  constructor() { }

  ngOnInit(): void {
    this.unity= '';
    if(this.propE.product.categorie == 'FRUIT_AND_VEGT'){
      this.unity = 'Kg';
    }
    if(this.propE.product.categorie == 'MILK'){
      this.unity = 'L';
    }

  }

}
