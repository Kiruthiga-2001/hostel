import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestBookingService } from '../test-booking.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  journeyInfo: FormGroup = this.formBuilder.group({});
  submitted : boolean = false;
  sourceCities: string[]=[];


  constructor(private formBuilder: FormBuilder,
    private bookingService: TestBookingService,
    private router: Router) { }

    ngOnInit(): void {
      this.sourceCities = this.bookingService.getSourceCities();
      this.journeyInfo = this.formBuilder.group({
        sourceLocation: ['',Validators.required],
        departureDate: ['',Validators.required]
      },{
        validators: [ this.validDate('departureDate')]
      });
    }

    get formControl() {
      return this.journeyInfo.controls;
    }

    onSubmit(){
      this.submitted=true;
      console.log(this.journeyInfo.value);
      if(this.journeyInfo.invalid)
        return;
      this.bookingService.setJourneyEndpoints(this.journeyInfo.value);
      this.router.navigate(['availableroom']);
    }


    validDate(date: string) {
      return (formGroup: FormGroup) => {
        const dateControl = formGroup.controls[date];
        const journeydate=new Date(dateControl.value);
        const currentdate = new Date()
        currentdate.setHours(0,0,0,0);
        if (journeydate.getTime() <  currentdate.getTime()){
            dateControl.setErrors({
              oldDate:true
            });
        }
      }
    }
  }
