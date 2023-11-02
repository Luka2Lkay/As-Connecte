import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
  // specify path the application should start at when running!
 { path: '', redirectTo: 'signup', pathMatch: 'full'},

//  declare all paths you have on your application
 {path: 'products', component: ProductsComponent},

 {path: 'signup', component: SignupComponent},

 {path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
