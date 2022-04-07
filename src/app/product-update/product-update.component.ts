import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../models/product.model';
import {ProductService} from '../services/product.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {ProductResponse} from '../models/productResponse';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',

  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  options: any = [

    'Produits Laitiers',
    'Animaux',
    'Fruits/Légumes'


  ];

  source: any;
  idProd: number;
  selectedOption: string = '';
  product: Product;
  prodResp: ProductResponse;
  productModified : ProductResponse;
  ProductIntermd: Product;
  errorMessage:'';
  selectedFile;
  imgURL: any;
  public imagePath;
  public message: string;
  p: any;
  nom: string;
  UpdateProductForm: FormGroup;

  constructor(private cd: ChangeDetectorRef ,private userService: UserService, private route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }


  ngOnInit(): void {
    this.productModified = new ProductResponse();

    this.route.params.subscribe(
      (parms: Params) => {
        this.idProd = +parms['id'];
        console.log("Product to update iss" + this.idProd);
      }
    );
    this.source = 'http://localhost:8081/api/productManage/ImgProd/' + this.idProd;

    // this.product = new Product(null,null,null,null,null);


    this.product = new Product(null, null, null, null, null);
    this.prodResp = new ProductResponse();


    this.UpdateProductForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      priceperUnit: new FormControl(null, Validators.required),
    });

    this.userService.GetProductById(this.idProd).subscribe(
      data => {

        this.prodResp = data;
        console.log("data heyaa please" + data);
        console.log("data heyaa please" + this.prodResp.name);
      }, error => console.log(error)
    );
    if(this.prodResp.categorie ==='MILK'){
      this.selectedOption = 'Produits Laitiers';
    }
    if(this.prodResp.categorie ==='ANIMAL'){
      this.selectedOption = 'Animaux';
    }
    if(this.prodResp.categorie ==='FRUIT_AND_VEGT'){
      this.selectedOption = 'Fruits/Légumes';
    }


  }

  refresh() {
    this.cd.detectChanges();
  }

  SelectChangeHandler(event: any){
    this.selectedOption = event.target.value;
    console.log("option iss"+ this.selectedOption);


  }



  reloadImage(){
  this.userService.GetReloadedImage(this.idProd).subscribe(
    data => {
      const reader = new FileReader();
      reader.onload = (e) => this.source = e.target.result;
      reader.readAsDataURL(new Blob([data]));

      console.log("data After image update" + data);




      this.refresh();
      // this.router.re(['/updateProd',this.idProd]);



    }, error => console.log(error)

  );


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
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    console.log('form data' + formData);
    this.userService.ChangeProductPhoto(this.idProd, formData).subscribe(
      data => {


        console.log("data After image update" + data);
        this.reloadImage();

       // this.router.re(['/updateProd',this.idProd]);



      }, error => console.log(error)

    );

  }




  onSubmit() {
    this.ProductIntermd = this.UpdateProductForm.value;
   // this.productModified = new Product(this.ProductIntermd.name,this.ProductIntermd.description, this.ProductIntermd.quantity,this.ProductIntermd.priceperUnit,);



    this.productModified.name = this.ProductIntermd.name;
    this.productModified.description = this.ProductIntermd.description;
    this.productModified.priceperUnit = this.ProductIntermd.priceperUnit;
    this.productModified.quantity = this.ProductIntermd.quantity;
    this.productModified.categorie = null;
    if(this.selectedOption ==='Animaux'){
      this.productModified.categorie = 'ANIMAL';
    }
    if(this.selectedOption ==='Produits Laitiers'){
      this.productModified.categorie = 'MILK';
    }
    if(this.selectedOption === 'Fruits/Légumes'){
      this.productModified.categorie = 'FRUIT_AND_VEGT';
    }


    console.log("prod modified"+this.productModified.name);



    this.userService.UpdateProduct(this.idProd, this.productModified).subscribe(

      data => {

        console.log("data heyaa please" + data);
        this.router.navigate(['/farm-manage']);
      }, error => console.log(error)

    );



  }
}
