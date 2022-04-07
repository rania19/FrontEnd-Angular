import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-vegt-product-item',
  templateUrl: './vegt-product-item.component.html',
  styleUrls: ['./vegt-product-item.component.css']
})
export class VegtProductItemComponent implements OnInit {

  @Input() VegProduct: Product;
  @Input() idFarm: number;
  constructor() { }

  ngOnInit(): void {
  }

}
