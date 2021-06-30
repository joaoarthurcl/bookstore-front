import { CategoryService } from './../category-service.service';
import { Router } from '@angular/router';
import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category = {} as Category;

  constructor(private router: Router,
    private service: CategoryService) { }

  ngOnInit(): void {
  }


  create(): void {
    this.service.create(this.category).subscribe((response) => {
      if (response) {
        this.category = response;
        this.router.navigate(['categories']);
        this.service.message('Category created successfully!');
      }
    }, err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.message(err.error.errors[i].message);
      }
    })
  }

  cancelForm(): void {
    this.router.navigate(['categories'])
  }

  categoryName(value: any) {
    this.category.name = value;
  }

  categoryDescription(value: any) {
    this.category.description = value;
  }
}
