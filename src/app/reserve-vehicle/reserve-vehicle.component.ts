import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-reserve-vehicle',
  templateUrl: './reserve-vehicle.component.html',
  styleUrls: ['./reserve-vehicle.component.css']
})
export class ReserveVehicleComponent {

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}
  isCancelOn = false;
  titleArr = ["Reserve a Rental Car", "View/ Modify/ Cancel Reservation"]

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  onClick(){
    this.isCancelOn = !this.isCancelOn;
    this.titleArr.reverse();
    
  }
}
