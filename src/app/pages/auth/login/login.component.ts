import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errmsg: string = "";
  loginform = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserService) {
  }

  login() {

    this.userservice.login({ "data": this.loginform.value })
      .subscribe({
        next: (res: Boolean) => {
          if (res) {
            this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || 'dashboard');
          } else {
            this.errmsg = "Username or password not matched";
          }
        },
        error: error => {
          this.errmsg = "Please try again later";
        }
      });
  }
}


