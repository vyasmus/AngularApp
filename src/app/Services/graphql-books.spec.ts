import { TestBed } from '@angular/core/testing';
import { GraphqlBooks } from './graphql-books';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { GraphqlBooksService } from './graphql-books-service';

describe('GraphqlBooks', () => {
  let service: GraphqlBooks;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [
        GraphqlBooks,
        GraphqlBooksService
      ]
    });
    service = TestBed.inject(GraphqlBooks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
