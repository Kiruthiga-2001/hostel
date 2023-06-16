import { Injectable } from '@angular/core';
import { GenerateTicketService } from './generate-ticket.service';
import { Room } from './interfaces/room';
import * as data from "../../buses.json";
import { GenerateTestService } from './generate-test.service';

@Injectable({
  providedIn: 'root'
})
export class TestBookingService {

  journey: any;
  roomes: Room[] = (data as any).default;

  constructor(private ticketService: GenerateTestService) {
  }

  getFilteredBuses(){
      if(this.journey){
        return this.roomes.filter((room)=>{
          return (room['Source'] == this.journey.sourceLocation );
        });
      }
      else
        return undefined;
  }

  getJourneyObject(){
    return this.journey;
  }

  getBusById(id:any){
      return this.roomes.find((room)=>{
          return room.id == id;
      })
  }

  setJourneyEndpoints(journey:any){
      this.journey=journey;
  }

  setJourneyFare(roomId:number,fare:number,selectedSeats:number[]){
    this.journey.fare = fare;
    this.journey.busId = roomId;
    this.journey.selectedSeats = selectedSeats;
    console.log(this.journey);
  }

  setPassengerInfo(passenger:object){
    this.journey.passenger = passenger;
  }

  confirmBooking(){
    this.updateBusInfo();
    return this.ticketService.generateTicket(this.journey,this.getBusById(this.journey.busId));
  }

  updateBusInfo(){
    const busIndex = this.roomes.findIndex(element => element.id == this.journey.busId )
    if(this.roomes[busIndex].bookings[this.journey.departureDate])
        var bookedStatus = [this.roomes[busIndex].bookings[this.journey.departureDate]];
    else
        var bookedStatus = new Array(4).fill(false);
    for( var i of this.journey.selectedSeats){
      bookedStatus[i]=true;
    }
    this.roomes[busIndex].bookings[this.journey.departureDate]=bookedStatus;
  }

  getSourceCities(){
    return [...new Set(this.roomes.map(bus=>bus.Source))]
  }

}
