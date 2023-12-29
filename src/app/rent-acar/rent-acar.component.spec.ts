import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentACarComponent } from './rent-acar.component';

describe('RentACarComponent', () => {
  let component: RentACarComponent;
  let fixture: ComponentFixture<RentACarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentACarComponent]
    });
    fixture = TestBed.createComponent(RentACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
