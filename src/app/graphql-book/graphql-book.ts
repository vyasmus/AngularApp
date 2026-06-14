import { Component } from '@angular/core';
import { GraphqlBooks } from '../Services/graphql-books'
import { Book, Author } from '../models/graphql/graphql';
import { delay, of } from 'rxjs';


@Component({
  selector: 'app-graphql-book',
  imports: [],
  templateUrl: './graphql-book.html',
  styleUrl: './graphql-book.css',
})
export class GraphqlBook {

  constructor(private graphqlBooks: GraphqlBooks) {}

  books: Book[] = [];
  authors: Author[] = [];

  showresultsOf : String = "";
  showBooks: boolean = false;

  // ngOnInit(): void {
  //   this.graphqlBooks.getBooks(this.books)
  // }

  loadBooks(): void {

    console.log('Loading books...');
    this.graphqlBooks.getBooks(this.books);
    console.log("Books loaded", this.books);
    this.showresultsOf = "Books";
  }

  loadBookById(id: string): void {

    console.log('Loading books...');
    this.graphqlBooks.bookById(id, this.books);
    console.log("Books loaded", this.books);
    this.showresultsOf = "Books";
  }

  loadAuthorsById(id: string) {
    console.log('Loading books...');
    this.graphqlBooks.getAuthersById(id, this.authors);
    console.log("Authers loaded", this.books);
    this.showresultsOf = "Authers";
  }

  loadAuthors() {
    console.log('Loading books...');
    this.graphqlBooks.getAuthers(this.authors);
    console.log("Authers loaded", this.authors);
    this.showresultsOf = "Authers";
  }

  clearResults() {
    this.books = [];
    this.authors = [];
    console.log('Results cleared.');
    this.showresultsOf = "";
  }
}
