import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FarmService} from '../../../farm/services/farm.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';


@Component({
  selector: 'app-milk-product-add',
  templateUrl: './milk-product-add.component.html',
  styleUrls: ['./milk-product-add.component.css']
})
export class MilkProductAddComponent implements OnInit {
  idFarm: number;
  MilkProductAdd: FormGroup;
  selectedFile;
  imgURL: any;
  p: Product;
  productTosend: Product;
  errorMessage:'';
  public imagePath;
  public message: string;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parms: Params) => {
        this.idFarm = +parms['id'];
      }
    );
    console.log("farm id is"+this.idFarm);
    this.MilkProductAdd = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        quantity: new FormControl(null, Validators.required),
        priceperUnit: new FormControl(null, Validators.required),
      });
  }

  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;


      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }


  onSubmit(){
    const formData = new FormData();
    this.p = this.MilkProductAdd.value;
    this.productTosend = new Product(this.p.name, this.p.description, this.p.quantity,this.p.priceperUnit,'MILK');
    const product =  this.productTosend;
    formData.append('product', JSON.stringify(product));
    formData.append('file', this.selectedFile);
    console.log(this.MilkProductAdd.value);
    console.log('form data' + formData);

    this.productService.AddProduct(formData,this.idFarm).subscribe(
      data => {
        console.log(data);
        if( data!= null){
          this.router.navigate(['farm-manage']).then(() => {
            window.location.reload();
          });

        }

      },
      err => {
        this.errorMessage = err.error.message;

      }
    );




  }

}
