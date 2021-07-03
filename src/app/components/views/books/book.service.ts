import { Book } from './book-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllByCategory(id_cat: String): Observable<Book[]> {
    const url = `${this.baseUrl}books?category=${id_cat}`
    return this.http.get<Book[]>(url);
  }

  findById(id: String): Observable<Book> {
    const url = `${this.baseUrl}books/${id}`
    return this.http.get<Book>(url);
  }

  create(id_cat: String, book: Book) {
    const url = `${this.baseUrl}books?category=${id_cat}/books/create`
    return this.http.post<Book>(url, book);
  }


}
