import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() AnimalProduct: Product;
  @Input() idFarm: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.AnimalProduct.id);
  }

}
