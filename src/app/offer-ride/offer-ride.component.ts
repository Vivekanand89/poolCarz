import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  offerRideForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.offerRideForm = this.formBuilder.group({
      name: ['', {updateOn: 'change', validators: [Validators.required, Validators.minLength(3)]}],
      startlocation: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      car: [''],
      seatsavailable: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2), this.numberValid]]
    });
  }

  numberValid(control: FormControl){
    if(control && control.value){
      if(control.value<50){
        return false;
      }else{
        return {numberInvalid: true}
      }
    }else{
      return false;
    }
  }

}
