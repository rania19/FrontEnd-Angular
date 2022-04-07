import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
   @Input() idF: number;
  AnimalProducts: Product[];
  animalproductSet = false;
  MilkproductSet = false;
  VegproductSet = false;

  MilkProducts: Product[];
  VegProducts: Product[];
  AnimalListLength: number;
  MilkListLength : number;
  VegListLength: number;
  constructor(private productService: ProductService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.animalproductSet = false;
    this.VegproductSet = false;
    this.MilkproductSet = false;


    console.log("id finale de ferme"+ this.idF);
    this.getAnimalProducts();
    this.getVegProducts();

  }

  refresh() {
    this.cd.detectChanges();
  }
  getVegProducts() {
    this.productService.GetVegProducts(this.idF).subscribe(
      (response) => {
        this.VegProducts = response;
        //this.listFarm.push(response);
        if (this.AnimalProducts) {
          console.log("Veg prod iss" + this.VegProducts);
          console.log("premiereeee" + this.VegProducts[0]);
        }
      },
      error => console.log(error));
  }




  getAnimalProducts(){
     this.productService.GetAnimalProducts(this.idF).subscribe(
       (response) => {
         this.AnimalProducts = response;
         //this.listFarm.push(response);
         if (this.AnimalProducts){
           console.log("listeeee iss"+this.AnimalProducts);
           console.log("premiereeee"+this.AnimalProducts[0]);
         }
       },
       error => console.log(error));

     this.productService.GetMilkProducts(this.idF).subscribe(
       (response) => {
         console.log("Tawa bech ylawej ala milks");
         this.MilkProducts = response;
         //this.listFarm.push(response);
         if (this.MilkProducts){
           console.log("listeeee iss"+this.MilkProducts );
           console.log("Milk product"+this.MilkProducts[0]);
         //  this.prod =this.MilkProducts[0];
           // this.mlik = new Product(this.prod.name, this.prod.description,this.prod.quantity,this.prod.priceperUnit,'MILK');
           // console.log("product milk isss"+this.mlik.name );
         }
       },
       error => console.log(error)

     );




  }

}
