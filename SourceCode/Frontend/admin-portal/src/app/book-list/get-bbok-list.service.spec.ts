import { TestBed, inject } from '@angular/core/testing';

import { GetBbokListService } from './get-bbok-list.service';

describe('GetBbokListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBbokListService]
    });
  });

  it('should be created', inject([GetBbokListService], (service: GetBbokListService) => {
    expect(service).toBeTruthy();
  }));
});
