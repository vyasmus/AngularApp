import { TestBed } from '@angular/core/testing';

import { RestfulBookService } from './restful-book-service';

describe('RestfulBookService', () => {
  let service: RestfulBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestfulBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
