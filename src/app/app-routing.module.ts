import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LoadvoucherComponent } from './loadvoucher/loadvoucher.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SupportComponent } from './support/support.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WifiDetailsComponent } from './wifi-details/wifi-details.component';
import { ViewWifiProfileComponent } from './view-wifi-profile/view-wifi-profile.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'support', component: SupportComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signin-signup', component: SigninComponent },
  { path: 'loadvoucher', component: LoadvoucherComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'wifi-details', component: WifiDetailsComponent },
  {path: 'wallet', component: WalletComponent},
  {path: 'view-wifi-profile', component:ViewWifiProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
