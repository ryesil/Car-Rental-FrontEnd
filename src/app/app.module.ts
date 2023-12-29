import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AppRoutingModule } from './appRouting/app-routing/app-routing.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { LocationsComponent } from './locations/locations.component';
import { CarSalesComponent } from './car-sales/car-sales.component';
import { ForBusinessComponent } from './for-business/for-business.component';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';
import { AdminActiveDirective } from './shared/directives/admin-active.directive';
import { OverlayComponent } from './overlay/overlay.component';
import { RentACarComponent } from './rent-acar/rent-acar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    PrimaryNavComponent,
    ReservationsComponent,
    VehiclesComponent,
    LocationsComponent,
    CarSalesComponent,
    ForBusinessComponent,
    LearnComponent,
    HomeComponent,
    AdminActiveDirective,
    OverlayComponent,
    RentACarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
