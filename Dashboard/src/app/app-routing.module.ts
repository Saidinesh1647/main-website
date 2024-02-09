import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingmanagmentComponent } from './bookingmanagment/bookingmanagment.component';
import { NavComponent } from './nav/nav.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '',redirectTo: '/register', pathMatch: 'full'},
  { path: 'register', component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Dashboard/bookingmanagment', component: BookingmanagmentComponent },
  { path: 'Dashboard/Services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
