import { Book } from './book-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategory(id_cat: String): Observable<Book[]> {
    const url = `${this.baseUrl}books?category=${id_cat}`
    return this.http.get<Book[]>(url);
  }

  findById(id: String): Observable<Book> {
    const url = `${this.baseUrl}books/${id}`
    return this.http.get<Book>(url);
  }

  create(id_cat: String, book: Book): Observable<Book> {
    const url = `${this.baseUrl}books?category=${id_cat}`
    return this.http.post<Book>(url, book);
  }

  message(value: String): void {
    this._snack.open(`${value}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }


}
