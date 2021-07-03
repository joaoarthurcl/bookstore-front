import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book-model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id_cat!: String;
  book = {} as Book;
  title = new FormControl('', [Validators.minLength(3)]);
  author_name = new FormControl('', [Validators.minLength(3)]);
  description = new FormControl('', [Validators.minLength(10)]);
  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.book.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
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
    if (this.description.invalid) {
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
    this.service.findById(this?.book?.id!).subscribe((response) => {
      this.book.id = response.id;
      this.book.title = response.title;
      this.book.author_name = response.author_name;
      this.book.description = response.description;
      console.log(response)
    })
  }

  update(): void {
    this.service.update(this.book).subscribe((response) => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      this.book = response;
      this.service.message('Livro atualizado com sucesso!');
    }, err => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      console.log(err)
      this.service.message('Erro ao atualizar o livro, tente mais tarde!')
    })
  }

  goToCategories() {
    this.router.navigate([`categories/${this.id_cat}/books`])
  }

}

