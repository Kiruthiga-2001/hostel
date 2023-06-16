import { Component, OnInit } from '@angular/core';
import { GenerateTicketService } from './../generate-ticket.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from '../interfaces/ticket';
import { GenerateTestService } from '../generate-test.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  ticketId: any;
  ticket: Ticket | undefined;

  constructor(private route: ActivatedRoute,
              private ticketService:GenerateTestService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.ticketId = params.get('id');
      this.ticket = this.ticketService.getTicketById(this.ticketId);
      if(!this.ticket)
          this.router.navigate(['notfound']);
    })
  }
}
