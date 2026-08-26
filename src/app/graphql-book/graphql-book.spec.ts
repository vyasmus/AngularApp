import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { GraphqlBook } from './graphql-book';

describe('GraphqlBook', () => {
  let component: GraphqlBook;
  let fixture: ComponentFixture<GraphqlBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphqlBook, ApolloTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphqlBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
