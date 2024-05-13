import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private _resellerService: ResellerService,
    private _router: Router
  ) {}

  show: any;
  message: String = '';
  messageSignin: String = '';
  invalidEmail: String = '';
  notPasswordMatch: String = '';

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  showSignUpForm() {
    this.show = 'sign-up-mode';
  }

  signUp() {
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(this.signUpForm.value.email)) {
      this.invalidEmail = 'Invalid email';
      setTimeout(() => {
        this.invalidEmail = '';
      }, 2000);
      return;
    } else if (
      this.signUpForm.value.password !== this.signUpForm.value.confirmPassword
    ) {
      this.notPasswordMatch = "Passwords don't match";
      setTimeout(() => {
        this.notPasswordMatch = '';
      }, 2000);
      return;
    }

    this._resellerService.signup(this.signUpForm.value).subscribe({
      next: () => {
        window.location.reload();
      },
      error: () => {
        this.message = 'User Already Exists';

        setTimeout(() => {
          this.message = '';
        }, 2000);
      },
    });
  }

  showSignInForm() {
    this.show = 'Sign-in-mode';
  }

  signIn() {

    this._resellerService.signIn(this.signInForm.value);

    this.messageSignin = this._resellerService.getSigninError();
  }
}
