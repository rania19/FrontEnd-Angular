import {Product} from './product.model';

export class ProductElement{
  id: number;
  product: Product;
  quantity: number;
  quantityPerSingleInvest: number;
  price: number;



  constructor(product: Product, quantity: number, price: number) {

    this.product = product;

    this.quantity = quantity;
    this.price = price;

  }
}
