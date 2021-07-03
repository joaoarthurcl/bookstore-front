import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book-model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  id_cat!: String;
  book = {} as Book;
  title = new FormControl('', [Validators.minLength(3)]);
  author_name = new FormControl('', [Validators.minLength(3)]);
  text = new FormControl('', [Validators.minLength(10)]);
  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
  }

  getMessageTitle() {
    if (this.title.invalid) {
      return 'O campo título deve conter entre 3 e 100 caracteres!'
    }
    return false;
  }
  getMessageAuthorName() {
    if (this.author_name.invalid) {
      return 'O campo nome do autor deve conter entre 3 e 100 caracteres!'
    }
    return false;
  }
  getMessageText() {
    if (this.text.invalid) {
      return 'O campo texto deve conter entre 10 e 2.000.000 caracteres!'
    }
    return false;
  }

  disabledButton() {
    if (!this.getMessageTitle() && !this.getMessageAuthorName() && !this.getMessageText()) {
      return false;
    }
    return true;
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

  goToCategories() {
    this.router.navigate(['categories'])
  }

}
