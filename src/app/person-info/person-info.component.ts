import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeatBookingService } from '../seat-booking.service';
import { TestBookingService } from '../test-booking.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  passengerInfo: FormGroup = this.formBuilder.group({});
  submitted : boolean = false;
  journey: any;

  constructor(private formBuilder: FormBuilder,
    private bookingService: TestBookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.journey = this.bookingService.getJourneyObject();
    if(!this.journey){
      this.router.navigate(['']);
    }
    else{
    this.passengerInfo = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      mobilenumber: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      aadharnumber: ['',[Validators.required,Validators.pattern('[0-9]{12}')]],
      email: ['',[Validators.required, Validators.email]]
    });}
  }

  get formControl() {
    return this.passengerInfo.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.passengerInfo.invalid)
        return;
    console.log(this.passengerInfo.value);
    this.bookingService.setPassengerInfo(this.passengerInfo.value);
    var ticketID = this.bookingService.confirmBooking();
    this.router.navigate(['/roomDetails',ticketID]);
  }

}

