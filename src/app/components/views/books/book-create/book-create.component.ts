import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book-model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  id_cat!: String;
  book = {} as Book;
  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;

  }

  findById(): void {
    this.service.findById(this.book.id!).subscribe((response) => {
      this.book.id = response.id;
    })
  }

  create(): void {
    this.service.create(this.id_cat, this.book).subscribe((response) => {
      this.book = response;
    })
  }

}
