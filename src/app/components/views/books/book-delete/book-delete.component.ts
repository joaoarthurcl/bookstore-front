import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book-model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  id_cat!: String;
  book = {} as Book;
  constructor(private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.book.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this?.book?.id!).subscribe((response) => {
      this.book.id = response.id;
      this.book.title = response.title;
      this.book.author_name = response.author_name;
      this.book.description = response.description;
    })
  }

  delete(): void {
    this.service.delete(this.book.id).subscribe((response) => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      this.service.message('Livro deletado com sucesso!');
    }, err => {
      this.router.navigate([`categories/${this.id_cat}/books`])
      this.service.message('Erro ao deletar o livro, tente mais tarde!')
    })
  }

  goToCategories() {
    this.router.navigate([`categories/${this.id_cat}/books`])
  }

}
