import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-milk-product-item',
  templateUrl: './milk-product-item.component.html',
  styleUrls: ['./milk-product-item.component.css']
})
export class MilkProductItemComponent implements OnInit {
   @Input() MilkProduct: Product;
  @Input() idFarm: number;
  constructor() { }

  ngOnInit(): void {
   console.log(this.MilkProduct.id);
  }

}
