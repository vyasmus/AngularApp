import { TestBed } from '@angular/core/testing';
import { GraphqlBooks } from './graphql-books';

describe('GraphqlBooks', () => {
  let service: GraphqlBooks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlBooks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
