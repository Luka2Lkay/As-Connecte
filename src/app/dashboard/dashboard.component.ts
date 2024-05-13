import { Component, OnInit } from '@angular/core';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _resellerService: ResellerService,
    private _router: Router
  ) {}

 
  ngOnInit(): void {
    this.isLoggedInUser()
  }

  isLoggedInUser() {
    if (this._resellerService.getToken() === null) {
      this._router.navigate(['/', 'signin-signup']);
    }
  }

  changePassword() {
    this._router.navigate(['/', 'change-password']);
  }

  logOut() {
    this._resellerService.logout();
  }
}
