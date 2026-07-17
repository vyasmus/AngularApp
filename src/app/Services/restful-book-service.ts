import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book } from '../models/graphql/book';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RestfulBookService {

  private http = inject(HttpClient);

  public async getBooks(): Promise<Book[]> {
    return await lastValueFrom(this.http.get<Book[]>(environment.restApiBooksUrl + '/api/books'));
  }
}
