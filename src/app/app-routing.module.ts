import { CategoryReadComponent } from './components/views/categories/category-read/category-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
