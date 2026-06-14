import { Service, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Book, findAllBooks, Author } from '../models/graphql/graphql';



const GET_BOOKS = gql`
  query GetBooks {
    findAllBooks {
      id
      name
      pageCount
      author {
        firstName
        id
        lastName
      }
    }
  }
`;

const GET_BOOK_BY_ID = gql`
  query GetBookById($id: ID!){
    bookById(id: $id) {
      id
      name
      pageCount
    }
  }
`;

const GET_AUTHERS = gql`
  query GetAuthers {
    findAllAuther {
      id
      firstName
      lastName
    }
  }
`;

const GET_AUTHER_BY_ID = gql`
  query GetAutherById($id: ID!){
    autherById(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

@Service()
export class GraphqlBooks {

  private apollo = inject(Apollo);

   getBooks(books : Book[]):  void {

    console.log('Fetching books...');
    let result = this.apollo.query<any>({ query: GET_BOOKS, fetchPolicy: 'network-only' });

    result.subscribe((result) => {
      console.log('Books fetched:', result.data['findAllBooks']);
      result.data['findAllBooks'].forEach((book: Book) => {
        books.push(book);
      });
    });

    console.log('Subscription completed.');

    return;
  }

  getBookswithAuther(books : Book[]):  void {

    console.log('Fetching books...');
    let result = this.apollo.query<any>({ query: GET_BOOKS, fetchPolicy: 'network-only' });

    result.subscribe((result) => {
      console.log('Books fetched:', result.data['findAllBooks']);
      result.data['findAllBooks'].forEach((book: Book) => {
        books.push(book);
      });
    });

    console.log('Subscription completed.');

    return;
  }

  bookById(bookId: string, books: Book[]) {
    let result = this.apollo.query<any, { id: string }>({ query: GET_BOOK_BY_ID, variables: { id: bookId }, fetchPolicy: 'network-only' });
    result.subscribe((result) => {
      console.log('Book fetched:', result.data['bookById']);
      books.push(result.data['bookById']);
    });
  }

  getAuthers(authers: Author[]):  void {

    console.log('Fetching authers...');
    let result = this.apollo.query<any>({ query: GET_AUTHERS, fetchPolicy: 'network-only' });

    result.subscribe((result) => {
      console.log('Books fetched:', result.data['findAllAuther']);
      result.data['findAllAuther'].forEach((auther: Author) => {
        authers.push(auther);
      });
    });

    console.log('Subscription completed.');

    return;
  }

  getAuthersById(autherId: string, authers: Author[]) {
    let result = this.apollo.query<any, { id: string }>({ query: GET_AUTHER_BY_ID, variables: { id: autherId }, fetchPolicy: 'network-only' });
    result.subscribe((result) => {
      console.log('Author fetched:', result.data['autherById']);
      authers.push(result.data['autherById']);
    });
  }
}
