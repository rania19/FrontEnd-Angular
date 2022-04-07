import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',

  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  accessDenied: boolean;
  banned: boolean;
  AuthForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  user: User;
  roles: string[] = [];

  @Output() myEvent = new EventEmitter();


  constructor(private cd: ChangeDetectorRef, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {

    this.accessDenied = false;

    this.AuthForm = new FormGroup({
        userName: new FormControl(null, Validators.required),
         mdp : new FormControl(null, Validators.required)

      }

    );

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }



  }

  refresh() {
    this.cd.detectChanges();
  }

  onSubmit() {
    console.log(this.AuthForm.value);
    this.authService.login(this.AuthForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.user = this.tokenStorage.getUser();
        if (this.user) {

          console.log("status iss"+this.user.status);
        }


        console.log("data heyaa" + data.banned);

        console.log("access denied value heyaa" + this.user.banned);
        console.log(this.tokenStorage.getUser().roles);
        console.log("rolee de naza est" + this.roles);


        if(this.user.status === 'banni'){
          this.accessDenied = true;
          this.refresh();


        }


        if (this.user.status === 'autorisé') {





        if (this.tokenStorage.getUser().roles == "ROLE_ADMIN") {
          console.log("dans role admin");
          this.router.navigate(['/admin']);
        }


        else {
          if (this.roles[0]==="ROLE_LIVREUR"){
            console.log("Rawwww inchalah arfou livreur0");
            this.router.navigate(['/EspaceLiv']);
          }
          if(this.roles[0]==="ROLE_USER"){
             this.router.navigate(['home'])
             .then(() => {
             window.location.reload();
              }
             );

          }

          console.log("Role tawa e theniii"+this.tokenStorage.getUser().roles);
          console.log("Role tawa e theniii testtt"+this.tokenStorage.getUser().roles[0]);
          console.log("dans role user");
        //  this.router.navigate(['home'])
          //  .then(() => {
             //   window.location.reload();
            //  }
           // );
        }

      }

        console.log("usernameeeeeeeeeeeeeeeeeeeee"+this.tokenStorage.getUser().id);
        console.log("usernameeeeeeeeeeeeeeeeeeeee"+this.tokenStorage.getUser().email);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );}





}
