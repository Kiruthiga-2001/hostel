/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestBookingService } from './test-booking.service';

describe('Service: TestBooking', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestBookingService]
    });
  });

  it('should ...', inject([TestBookingService], (service: TestBookingService) => {
    expect(service).toBeTruthy();
  }));
});
