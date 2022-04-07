export class Product {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  priceperUnit: number;
  categorie: string;


  constructor(name: string, description: string, quantity: number, priceperUnit: number, categorie: string) {

    this.description = description;

    this.name = name;
    this.categorie = categorie;
    this.quantity = quantity;
    this.priceperUnit = priceperUnit;


  }

}
