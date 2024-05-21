import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core';
import { provideAnimations } from "@angular/platform-browser/animations";
import { NgxSpinnerService } from "ngx-spinner";
import { NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule, RouterLink, FormsModule, ReactiveFormsModule],
  providers: [provideAnimations()],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  signupForm: FormGroup;
  firstnameerr: string = "";
  lastnameerr: string = "";
  usernameerr: string = "";
  emailerr: string = "";
  gendererr: string = "";
  passworderr: string = "";
  phonenumberr: string = "";
  doberr: string = "";

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private spinner: NgxSpinnerService) {
    this.signupForm = formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      GenderId: ['', [Validators.required]],
      DateofBirth: ['', [Validators.required]],
      UserName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&].{5,30}')]],
      PhoneNumber: ['', Validators.required]
    })
  }

  SignUp() {
    this.spinner.show();
    let data = {
      "data": this.signupForm.value
    }
    this.userService.Register(data).subscribe(res => {
      this.spinner.hide();
      if (res.success) {
        this.success(res.message)
      }
    })
  }

  success(msg: string) {
    this.signupForm.reset();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }

}
