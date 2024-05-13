import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { WifiDetailsComponent } from './wifi-details/wifi-details.component';
import { LoadvoucherComponent } from './loadvoucher/loadvoucher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SigninComponent } from './signin/signin.component';
import { SupportComponent } from './support/support.component';
import { BodyComponent } from './body/body.component';
import { AuthInterceptor } from './auth-interceptor.interceptor';
import { ViewWifiProfileComponent } from './view-wifi-profile/view-wifi-profile.component'; 
import { WalletComponent } from './wallet/wallet.component';

import { AboutComponent } from './about/about.component';
import { NavBarDashBoardComponent } from './nav-bar-dash-board/nav-bar-dash-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountDownComponent } from './test/count-down/count-down.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WifiDetailsComponent,
    LoadvoucherComponent,
    NavBarComponent,
    HomeComponent,
    ChangePasswordComponent,
    SigninComponent,
    SupportComponent,
    BodyComponent,
    ViewWifiProfileComponent,
    WalletComponent,
    AboutComponent,
    NavBarDashBoardComponent,
    DashboardComponent,
    CountDownComponent,
    GooglemapsComponent
  ],
  imports: [
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
