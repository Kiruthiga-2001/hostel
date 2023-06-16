/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerateTestService } from './generate-test.service';

describe('Service: GenerateTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateTestService]
    });
  });

  it('should ...', inject([GenerateTestService], (service: GenerateTestService) => {
    expect(service).toBeTruthy();
  }));
});
