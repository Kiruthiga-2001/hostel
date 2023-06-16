import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from '../seat-booking.service';
import { Location } from '@angular/common';
import { Room } from '../interfaces/room';
import { TestBookingService } from '../test-booking.service';

@Component({
  selector: 'app-availableroom',
  templateUrl: './availableroom.component.html',
  styleUrls: ['./availableroom.component.css']
})
export class AvailableroomComponent implements OnInit {

  availableBuses:Room[] | undefined = undefined;
  keys = ["Room Name","Room Type","Room Number","Seats Available","Fare"];
  constructor(private bookingService: TestBookingService,
              private location: Location) { }

  ngOnInit(): void {
    this.availableBuses = this.bookingService.getFilteredBuses();
  }

  navigateBack(){
    this.location.back();
  }
}
