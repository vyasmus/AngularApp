import { Component } from '@angular/core';
import { RestfulBookService } from '../Services/restful-book-service';
import { Book } from '../models/graphql/book';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-restful-book',
  imports: [],
  templateUrl: './restful-book.html',
  styleUrl: './restful-book.css',
})
export class RestfulBook {


  constructor(private restfulBookService: RestfulBookService) { }

  books: Book[] = [];

  showresultsOf : String = "";

  loadBooks(): void {

    console.log('Loading books...');
    this.restfulBookService.getBooks().then(books => {
      this.books = books;
    });
    console.log("Books loaded", this.books);
    this.showresultsOf = "Books";
  }

  clearResults() {
    this.books = [];
    //this.authors = [];
    console.log('Results cleared.');
    this.showresultsOf = "";
  }

}
