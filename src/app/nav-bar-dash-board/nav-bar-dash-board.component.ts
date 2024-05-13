import { Component, OnInit } from '@angular/core';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-dash-board',
  templateUrl: './nav-bar-dash-board.component.html',
  styleUrls: ['./nav-bar-dash-board.component.scss']
})
export class NavBarDashBoardComponent implements OnInit {
  constructor(
    private _resellerService: ResellerService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  changePassword() {
    this._router.navigate(['/', 'change-password']);
  }
  counter = 0;

  increment() {
    this.counter++;
  }

  logOut() {
    this._resellerService.logout();
  }

}
