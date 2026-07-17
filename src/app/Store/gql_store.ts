import { Book, Author } from '../models/graphql/graphql';

export interface GQLStore {
  books: Book[];
  authors: Author[];
}

export class GQLStore {
  books: Book[];
  authors: Author[];

  constructor(books: Book[], authors: Author[]) {
    this.books = books;
    this.authors = authors;
  }
}
