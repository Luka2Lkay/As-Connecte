import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private _resellerService: ResellerService,
    private _router: Router
  ) {}

  hide = true;
  userId = this._resellerService.getUserId();
  message?:string
  errMessage?:string
  errMessageOld?:string
  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmNewPassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  getId() {
    return this.userId;
  }

  changePassword() {
    const { oldPassword, newPassword, confirmNewPassword } =
      this.changePasswordForm.value;
  
    if (oldPassword !== this._resellerService.getPassword()) {
      this.errMessageOld = "Don't match current password"

      setTimeout(() => {
        this.errMessageOld = '';
      }, 2000);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      this.errMessage = "Passwords don't match"

      setTimeout(() => {
        this.errMessage = '';
      }, 2000);
      return;
    }

    this._resellerService
      .changePassword(this.getId(), this.changePasswordForm.value)
      .subscribe({
        next: (res) => {
          
          this.message = res;

          setTimeout(() => {
            this.message = '';
            this._router.navigate(["/", "signin-signup"])
          }, 2000);
        },
        error: (error) => console.log(error.message)
      });
  }

  cancel() {
    this._router.navigate(["/", "dashboard"])
  }
}
