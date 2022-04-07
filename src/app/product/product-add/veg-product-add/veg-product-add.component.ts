import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FarmService} from '../../../farm/services/farm.service';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-veg-product-add',
  templateUrl: './veg-product-add.component.html',
  styleUrls: ['./veg-product-add.component.css']
})
export class VegProductAddComponent implements OnInit {

  VegProductAdd: FormGroup;
  p: Product;
  productTosend: Product;
  idFarm: number;
  selectedFile;
  imgURL: any;
  public imagePath;
  public message: string;
  errorMessage:'';

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (parms: Params) => {
        this.idFarm = +parms['id'];
      }
    );
    console.log("farm id is"+this.idFarm);

    this.VegProductAdd = new FormGroup(
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
    this.p = this.VegProductAdd.value;
    this.productTosend = new Product(this.p.name, this.p.description, this.p.quantity, this.p.priceperUnit,'FRUIT_AND_VEGT');
    const product = this.productTosend;
    formData.append('product', JSON.stringify(product));
    formData.append('file', this.selectedFile);
    console.log(this.VegProductAdd.value);
    console.log('form data' + formData);
    this.productService.AddProduct(formData,this.idFarm).subscribe(

      data => {
        if(data != null) {
          console.log(data);
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
