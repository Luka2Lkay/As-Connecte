import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LoadvoucherComponent } from './loadvoucher/loadvoucher.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BodyComponent } from './body/body.component';
import { SupportComponent } from './support/support.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WifiDetailsComponent } from './wifi-details/wifi-details.component';
import { ViewWifiProfileComponent } from './view-wifi-profile/view-wifi-profile.component';
import { UsersDetailsComponent } from './users-details/users-details.component'; 
// import { NavBarDashBoardComponent } from './nav-bar-dash-board/nav-bar-dash-board.component';
// import {WalletCompo
// import { UsersDetailsComponent } from './users-details/users-details.component';
import { NavBarDashBoardComponent } from './nav-bar-dash-board/nav-bar-dash-board.component';
import { WalletComponent } from './wallet/wallet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { CountDownComponent } from './test/count-down/count-down.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
// import { TimerComponent } from './timer/timer.component';
// import { TimerComponent } from './timer/timer.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'support', component: SupportComponent },

  { path: 'products', component: ProductsComponent },

  { path: 'signin-signup', component: SigninComponent },

  { path: 'body', component: BodyComponent },

  { path: 'loadvoucher', component: LoadvoucherComponent },

  { path: 'change-password', component: ChangePasswordComponent },

  { path: 'wifi-details', component: WifiDetailsComponent },

  // {path: 'wallet', component: WalletComponent},


  {path: 'wallet', component: WalletComponent},

  {path: 'view-wifi-profile', component:ViewWifiProfileComponent},
  {path: 'dash-nav', component: NavBarDashBoardComponent},
 {path: 'wifi-details', component: WifiDetailsComponent},

  { path: 'view-wifi-profile', component: ViewWifiProfileComponent },
  { path: 'dash-nav', component: NavBarDashBoardComponent },
  { path: 'wifi-details', component: WifiDetailsComponent },

  { path: 'about', component: AboutComponent },
 {path: 'googlemaps',component:GooglemapsComponent },

  { path: 'userwifidetails', component: UsersDetailsComponent },
  { path: 'nav', component: NavBarComponent },
  { path: 'count_down', component: CountDownComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
