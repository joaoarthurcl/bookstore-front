import { CategoryService } from './../category-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  category = {} as Category;

  constructor(private router: Router,
    private service: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category.id = this?.route?.snapshot?.paramMap?.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe((response) => {
      this.category.name = response.name;
      this.category.description = response.description
    })
  }

  deleteCategory(): void {
    this.service.delete(this.category.id!).subscribe((response) => {
      this.goToCategories();
      this.service.message('Categoria excluída com sucesso!');
    }, err => {
      this.service.message('Categoria não pode ser excluída, possui livros associados!');
    })
  }

  goToCategories(): void {
    this.router.navigate(['categories'])
  }

}
