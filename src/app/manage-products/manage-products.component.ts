import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BannDialogComponent} from '../bann-dialog/bann-dialog.component';
import {DeleteRecDialogComponent} from '../delete-rec-dialog/delete-rec-dialog.component';
import {DeleteProductDialogComponent} from '../delete-product-dialog/delete-product-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
   @Input() id: number;
  AnimalProducts: Product[];
  animalproductSet = false;
  MilkproductSet = false;
  VegproductSet = false;
  MilkProducts: Product[];
  VegProducts: Product[];



  constructor(public dialog: MatDialog,private productService: ProductService, private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    console.log("id finale de ferme"+ this.id);
    this.getAnimalProducts();
    this.getVegProducts();
  }

  refresh() {
    this.cd.detectChanges();
  }

  getVegProducts() {
    this.productService.GetVegProducts(this.id).subscribe(
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
    this.productService.GetAnimalProducts(this.id).subscribe(
      (response) => {
        this.AnimalProducts = response;
        //this.listFarm.push(response);
        if (this.AnimalProducts){
          console.log("listeeee iss"+this.AnimalProducts);
          console.log("premiereeee"+this.AnimalProducts[0]);
        }
      },
      error => console.log(error));

    this.productService.GetMilkProducts(this.id).subscribe(
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

  openDialog(id: number){


      console.log("id-to-signal-issss"+id);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = id;

      this.dialog.open(DeleteProductDialogComponent, dialogConfig);

    }

      Update(id: number){
        this.router.navigate(['/updateProd',id]);
          }



}
