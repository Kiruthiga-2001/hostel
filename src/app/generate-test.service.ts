import { Injectable } from '@angular/core';
import { Ticket } from './interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class GenerateTestService {

  tickets: Ticket[] = [];
  constructor() { }

  generateTicket(journey:any,bus:any){
        var newTicket:Ticket = {
          "id": Date.now(),
          "Room Name": bus['Room Name'],
          "Date": journey["departureDate"],
          "Source":journey["sourceLocation"],
          "Room Type":bus['Room Type'],
          "Total Fare":journey["fare"],
          "Seat No": this.convertSeatNumber(journey['selectedSeats']),
          "Passenger Details":journey["passenger"]
        };
        this.tickets.push(newTicket);
        console.log(newTicket);
        return newTicket.id;
  }

  getTicketById(id:any){
    return this.tickets.find((ticket)=>{
        return ticket.id == id;
    })
  }

  convertSeatNumber(seatNumbers:number[]){
      var seatNames = [];
      for( var num of seatNumbers){
          var name = String.fromCharCode(65+Math.floor(num/4));
          name=name+(1+num%4)
          seatNames.push(name);
      }
      return seatNames;
  }
}


