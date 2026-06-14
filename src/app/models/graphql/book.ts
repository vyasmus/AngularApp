import { Author } from "./author";

export interface Book {
  id: string;
  name: string;
  pageCount: number;
  author: Author;
}

export interface findAllBooks {
  books: Book[];
}
