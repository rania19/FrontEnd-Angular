import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


import {RegisterRequest} from '../../models/RegisterRequest';

import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  options: any = [

    'Agriculteur',
    'Investisseur'



  ];
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
  selectedOption: string = '';
   userName:String;
   addresse: String;
   mdp: String;
   email:String;
  registerForm: FormGroup;
  selectedFile;
  registerRequest: RegisterRequest;
  RequestTosend: RegisterRequest;
  IsSignUpFailed: boolean;
  isSuccessful: boolean;
  errorMessage = '';
  imgURL: any;
  public imagePath;
  public message: string;

  constructor(private authService: AuthService, private router: Router, private cd: ChangeDetectorRef) { }

  refresh() {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.selectedVille = 'Tunis';
    this.isSuccessful = false;
    this.IsSignUpFailed = false;

    this.registerForm = new FormGroup(
      {

        userName: new FormControl(null, Validators.required),
        telephone: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(8), Validators.maxLength(8)]),
        addresse: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        mdp: new FormControl(null, [Validators.required, Validators.minLength(8)]),

      }
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
  }

  radioChangeHandler(event: any){
    this.selectedOption = event.target.value;

    console.log("option iss"+ this.selectedOption);


  }
  selectChangeHandler(event: any){
    this.selectedVille = event.target.value;


    console.log("ville iss"+ this.selectedVille);
  }


  onSubmit(){
   // console.log(this.registerForm.value);
    // this.authService.register(this.registerForm.value).subscribe(
      // data => {
        // console.log(data);
        // this.isSuccessful = true;
        // this.IsSignUpFailed = false;
      // },
      // err => {
        // this.errorMessage = err.error.message;
        // this.IsSignUpFailed = true;
      // }
    // );

    const formData = new FormData();
    this.registerRequest = this.registerForm.value;
    console.log("register request name "+ this.registerRequest.userName);
    console.log("register request email "+ this.registerRequest.email);
    console.log("register request mdp "+ this.registerRequest.mdp);
    console.log("register request add "+ this.registerRequest.addresse);


    this.RequestTosend = new RegisterRequest(this.registerRequest.userName, this.registerRequest.mdp, this.registerRequest.addresse, this.registerRequest.email, ['ROLE_USER'], this.registerRequest.telephone);

    this.RequestTosend.clientrole = this.selectedOption;
    this.RequestTosend.ville = this.selectedVille;
    console.log("request ville iss "+ this.RequestTosend.ville);
    console.log("role to send "+ this.RequestTosend.role);
    console.log("name to send "+ this.RequestTosend.userName);


     const user = this.RequestTosend;
    //const user = this.registerForm.value;
    formData.append('user', JSON.stringify(user));
    formData.append('file', this.selectedFile);
    console.log(this.registerForm.value);
    console.log('form data' + formData);
     this.authService.register(formData).subscribe(
       data => {
         if (data != null) {
           this.refresh();
           setTimeout(() => {
             this.router.navigate(['/login']);
           }, 3000);  //5s
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





}
