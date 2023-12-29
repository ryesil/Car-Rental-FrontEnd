import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSalesComponent } from './car-sales.component';

describe('CarSalesComponent', () => {
  let component: CarSalesComponent;
  let fixture: ComponentFixture<CarSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSalesComponent]
    });
    fixture = TestBed.createComponent(CarSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
