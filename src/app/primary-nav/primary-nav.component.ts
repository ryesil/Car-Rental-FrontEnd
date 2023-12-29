
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent {
  isClicked = -1;
  ebenIndex : number = 2;
  hide=true;

constructor(private router : Router){
}
navigations = [ 'reservations', 'vehicles', 'locations', 'car-sales', 'for-business', 'learn' ];

onTabClicked(tabIndex:number){
  if(tabIndex !== this.isClicked){
   
    this.router.navigate(['/' + this.navigations[tabIndex]]);
    this.isClicked = tabIndex;
    console.log(this.isClicked);
  } else {
    this.isClicked = -1;
    this.router.navigate(['/']);
    console.log(this.isClicked);
  }
  
}
}
