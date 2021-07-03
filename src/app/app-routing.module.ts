import { BookCreateComponent } from './components/views/books/book-create/book-create.component';
import { BookReadAllComponent } from './components/views/books/book-read-all/book-read-all.component';
import { CategoryDeleteComponent } from './components/views/categories/category-delete/category-delete.component';
import { CategoryReadComponent } from './components/views/categories/category-read/category-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/views/categories/category-create/category-create.component';
import { CategoryUpdateComponent } from './components/views/categories/category-update/category-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryReadComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categories/delete/:id',
    component: CategoryDeleteComponent
  },
  {
    path: 'categories/update/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'categories/:id_cat/books',
    component: BookReadAllComponent
  },
  {
    path: 'categories/:id_cat/books/create',
    component: BookCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
