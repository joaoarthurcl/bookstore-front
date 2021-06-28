import { CategoryService } from './../category-service.service';
import { Router } from '@angular/router';
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
    private service: CategoryService) { }

  ngOnInit(): void {
  }



}
