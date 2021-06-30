import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = environment.baseUrl;


  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Category[]> {
    const url = `${this.baseUrl}categories`
    return this.http.get<Category[]>(url);
  }

  findById(id: String): Observable<Category> {
    const url = `${this.baseUrl}categories/${id}`
    return this.http.get<Category>(url);
  }

  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}categories`
    return this.http.post<Category>(url, category);
  }

  delete(categoryId: Category): Observable<Category> {
    const url = `${this.baseUrl}categories/${categoryId.id}`
    return this.http.post<Category>(url, categoryId.id);
  }

  message(value: String): void {
    this._snack.open(`${value}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
