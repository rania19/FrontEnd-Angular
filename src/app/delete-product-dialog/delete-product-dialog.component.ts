import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.css']
})
export class DeleteProductDialogComponent implements OnInit {

  idProd: number;
  constructor(private productService: ProductService,private router: Router,private dialogRef: MatDialogRef<DeleteProductDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.idProd = data;
    console.log("data isss"+data);
    console.log("this dialog is to bann userrr"+ this.idProd);
  }

  ngOnInit(): void {
  }
  removeProduct(){
    this.productService.RemoveProduct(this.idProd).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
        //this.router.navigate(['/farm-manage']);
        window.location.reload();
      },
      error => console.log(error)
    );

  }

}
