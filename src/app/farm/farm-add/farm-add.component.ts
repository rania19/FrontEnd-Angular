import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';
import {FarmService} from '../services/farm.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../services/token-storage.service';
import {Farm} from '../../models/Farm';



@Component({
  selector: 'app-farm-add',
  templateUrl: './farm-add.component.html',
  styleUrls: ['./farm-add.component.css']
})
export class FarmAddComponent implements OnInit {
  villes: any = [

    'Tunis',
    'Beja',
    'Nabeul',
    'Kef',
    'Sousse',
    'Sfax',
    'Kairouan'
  ];

  selectedVille: string = '';
  FarmAdd: FormGroup;
  idClient: number;
  selectedFile;
  imgURL: any;
  farm: Farm;
  farmTosend: Farm;

  public imagePath;
  public message: string;

  constructor(private route: ActivatedRoute, private farmService: FarmService,private tokenStorage: TokenStorageService, private router: Router ) {
  }

  ngOnInit(): void {



    this.FarmAdd = new FormGroup(
      {
        nomF: new FormControl(null, Validators.required),
        region: new FormControl(null, Validators.required),
        descriptionF: new FormControl(null, Validators.required),
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



  selectChangeHandler(event: any){
    this.selectedVille = event.target.value;


    console.log("ville iss"+ this.selectedVille);
  }

  onSubmit(){
    const formData = new FormData();
    this.farm = this.FarmAdd.value;
    this.farmTosend = new Farm(this.farm.nomF, this.farm.descriptionF, this.farm.region);
    this.farmTosend.ville = this.selectedVille;
    // const farm = this.FarmAdd.value;
    const farm = this.farmTosend;
    formData.append('farm', JSON.stringify(farm));
    formData.append('file', this.selectedFile);
    // this.farm = this.FarmAdd.value;
    console.log("User id is "+formData, this.tokenStorage.getUser().id);
    this.farmService
      .createFarm(formData, this.tokenStorage.getUser().id).subscribe(data => {
        console.log(data);
        if(data !=null){
         this.router.navigate(['/farm-manage']);
         // window.location.reload();
        }

      },
      error => console.log(error));
  }


}
