import { Category } from './../category.model';
import { CategoryService } from './../category-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'books', 'actions'];


  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {

    this.service.findAll().subscribe(response => {
      this.categories = response;
      console.log(this.categories)
    })
  }

}
