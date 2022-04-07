import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/Admin.service';
import {RegisterRequest} from '../../models/RegisterRequest';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-add-livreur',
  templateUrl: './add-livreur.component.html',
  styleUrls: ['./add-livreur.component.css']
})
export class AddLivreurComponent implements OnInit {
   OrdertoAdd = false;
  villes: any = [

    'Tunis',
    'Beja',
    'Nabeul',
    'Kef',
    'Sousse',
    'Sfax',
    'Kairouan'
  ];


  listLivreurs: User[];
  selectedVille: string = '';
  AjoutLivreur: FormGroup;
  selectedFile;
  errorMessage = '';
  imgURL: any;
  isSuccessful;
  public imagePath;
  public message: string;

  registerRequest: RegisterRequest;
  RequestTosend: RegisterRequest;
  IsSignUpFailed: boolean;

  constructor(private adminService: AdminService, private authService: AuthService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.isSuccessful = false;
    this.IsSignUpFailed = false;

    this.AjoutLivreur = new FormGroup({
      userName: new FormControl(null, Validators.required),
      telephone: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)]),
      addresse: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mdp: new FormControl(null, [Validators.required, Validators.minLength(8)]),

    });

  }

  refresh() {
    this.cd.detectChanges();
  }






  selectChangeHandler(event: any){
    this.selectedVille = event.target.value;


    console.log("ville iss"+ this.selectedVille);
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


    this.RequestTosend = new RegisterRequest(this.registerRequest.userName, this.registerRequest.mdp, this.registerRequest.addresse, this.registerRequest.email, ['ROLE_LIVREUR'], this.registerRequest.telephone);

    console.log("role to send "+ this.RequestTosend.role);
    console.log("name to send "+ this.RequestTosend.userName);


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
          this.reloadData();

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




}
