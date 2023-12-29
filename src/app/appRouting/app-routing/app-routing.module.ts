import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from 'src/app/reservations/reservations.component';
import { AppComponent } from 'src/app/app.component';
import { VehiclesComponent } from 'src/app/vehicles/vehicles.component';
import { LocationsComponent } from 'src/app/locations/locations.component';
import { CarSalesComponent } from 'src/app/car-sales/car-sales.component';
import { ForBusinessComponent } from 'src/app/for-business/for-business.component';
import { LearnComponent } from 'src/app/learn/learn.component';
import { HomeComponent } from 'src/app/home/home.component';


const appRoutes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'reservations', component:ReservationsComponent},
  {path:'vehicles', component:VehiclesComponent},
  {path:'locations', component:LocationsComponent},
  {path:'car-sales', component:CarSalesComponent},
  {path:'for-business', component:ForBusinessComponent},
  {path:'learn', component:LearnComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
