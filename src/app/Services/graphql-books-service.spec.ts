import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { GraphqlBooksService } from './graphql-books-service';

describe('GraphqlBooks', () => {
  let service: GraphqlBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [GraphqlBooksService]
    });
    service = TestBed.inject(GraphqlBooksService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
