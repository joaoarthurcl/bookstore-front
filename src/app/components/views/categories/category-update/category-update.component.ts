import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category-service.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category = {} as Category;

  constructor(private service: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe((response) => {
      this.category.name = response.name;
      this.category.description = response.description;
    })
  }

  updateCategory(): void {
    this.service.update(this.category).subscribe((response) => {
      this.goToCategories();
      this.service.message('Categoria atualizada com sucesso!');
    }, err => {
      this.service.message('Validar se todos os campos estão preenchidos corretamente.')
    })
  }

  goToCategories() {
    this.router.navigate(['categories']);
  }
}
