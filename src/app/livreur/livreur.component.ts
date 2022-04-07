import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {AdminService} from '../services/Admin.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterRequest} from '../models/RegisterRequest';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {

  villes: any = [

    'Tunis',
    'Beja',
    'Nabeul',
    'Kef',
    'Sousse',
    'Sfax',
    'Kairouan'





  ];
  OrdertoAdd = false;
  listLivreurs: User[];
  isSuccessful = false;
  IsSignUpFailed: boolean;
  selectedFile;
  errorMessage = '';
  imgURL: any;
  term: string;


  public imagePath;
  public message: string;
  selectedVille: string = '';

  registerRequest: RegisterRequest;
  RequestTosend: RegisterRequest;

  AjoutLivreur: FormGroup;


  constructor(private adminService: AdminService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.selectedVille = 'Tunis';
    this.AjoutLivreur = new FormGroup({
      userName : new FormControl(null, Validators.required),
      telephone: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)]),
      addresse: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mdp: new FormControl(null, [Validators.required, Validators.minLength(8)]),

    });

    this.isSuccessful = false;
    this.IsSignUpFailed = false;
    this.adminService.GetLivreurs().subscribe(
      data => {

        this.listLivreurs = data;

      },
      error => console.log(error)
    );
  }


  GetChangedList(Emitlist: any) {
    this.listLivreurs = Emitlist;
    this.refresh();
    console.log(Emitlist);
  }

  refresh() {
    this.cd.detectChanges();
  }

   GetAddForm(){
    this.OrdertoAdd = true;
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
    this.registerRequest = this.AjoutLivreur.value;
    console.log("register request name "+ this.registerRequest.userName);
    console.log("register request email "+ this.registerRequest.email);
    console.log("register request mdp "+ this.registerRequest.mdp);
    console.log("register request add "+ this.registerRequest.addresse);
    console.log("register request telephone "+ this.registerRequest.telephone);


    this.RequestTosend = new RegisterRequest(this.registerRequest.userName, this.registerRequest.mdp, "", this.registerRequest.email, ['ROLE_LIVREUR'],this.registerRequest.telephone);
    this.RequestTosend.telephone = this.registerRequest.telephone;
    this.RequestTosend.ville = this.selectedVille;
    console.log("request ville iss "+ this.RequestTosend.ville);
    console.log("role to send "+ this.RequestTosend.role);
    console.log("name to send "+ this.RequestTosend.userName);
    console.log("phone to senddd "+ this.RequestTosend.telephone);
    console.log("RequestTo send iss "+ this.RequestTosend);

    const user = this.RequestTosend;
    // const user = this.registerForm.value;
    formData.append('user', JSON.stringify(user));
    formData.append('file', this.selectedFile);
    console.log(this.AjoutLivreur.value);
    console.log('form data' + formData);
    this.adminService.registerLivreur(formData).subscribe(
      data => {
        if (data != null) {
          // this.refresh();
          this.OrdertoAdd= false;
          this.reloadData();
          this.refresh();

          // setTimeout(() => {
          // this.router.navigate(['/login']);
          // }, 5000);  //5s
        }
        console.log(data);
        this.isSuccessful = true;
        this.IsSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.IsSignUpFailed = true;
      }

    );





  }



  selectChangeHandler(event: any){
    this.selectedVille = event.target.value;


    console.log("ville iss"+ this.selectedVille);
  }

  reloadData(){
    this.adminService.GetLivreurs().subscribe(

      data => {
        this.listLivreurs = data;
        this.refresh();
        console.log("liste des livreurs " +this.listLivreurs);

      },
      error => console.log(error)
    );
  }


  deleteLiv(idLiv: number){
    this.adminService.DeleteLivreur(idLiv).subscribe(
      data => {
        console.log(data);
        if(data !=null){
          this.refresh();
          this.reloadData();
          this.refresh();
        }

      },
      error => console.log(error)

    );

    this.reloadData();
  }


}
