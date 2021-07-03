import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Book } from './../book-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.css']
})
export class BookReadAllComponent implements OnInit {

  books: Book[] = [];
  book = {} as Book;
  displayedColumns: string[] = ['id', 'title', 'books', 'actions'];
  id_cat!: String;

  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this?.route?.snapshot?.paramMap?.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategory(this.id_cat).subscribe((response) => {
      this.books = response
    })
  }

  goToCreateBook(): void {
    this.router.navigate([`categories/${this.id_cat}/books/create`])
  }
}


