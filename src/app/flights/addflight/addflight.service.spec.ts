import { TestBed, inject } from '@angular/core/testing';

import { AddflightService } from './addflight.service';

describe('AddflightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddflightService]
    });
  });

  it('should be created', inject([AddflightService], (service: AddflightService) => {
    expect(service).toBeTruthy();
  }));
});
