import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  rentalLinks = [
    {text:'Start a Car Reservation >', link:''},
    {text:'View/Modify/Cancel >', link:''},
    {text:'All Deals & Coupons >', link:''},
    {text:'Get a Receipt >', link:''},
    {text:'Moving Truck or Van Rentals  >', link:''},
    {text:'One-Way Car Rentals >', link:''},
    {text:'Long-Term Car Rentals >', link:''},
    {text:'Subscribe with ProRent  >', link:''},
  ]
  
  replacementRentals = [
    {text:'Rent a Car After an Accident  >', link:''},
    {text:'Dealership & Service Vehicles >', link:''},
    {text:'Payment Options >', link:''},
    {text:'Rental Coverage >', link:''},
    {text:'Rental Coverage Levels  >', link:''},
  ]
  Businesses = [
    {text:'Solutions for Business >', link:''},
    {text:'Enterprise Truck Rental >', link:''},
    {text:'Manage Your Fleet >', link:''},
    {text:'Dealership Solutions & Technology >', link:''},
    {text:'LEGS Dealership >', link:''},
  ]
}
