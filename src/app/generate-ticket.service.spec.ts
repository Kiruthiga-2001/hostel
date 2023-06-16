/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerateTicketService } from './generate-ticket.service';

describe('Service: GenerateTicket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateTicketService]
    });
  });

  it('should ...', inject([GenerateTicketService], (service: GenerateTicketService) => {
    expect(service).toBeTruthy();
  }));
});
