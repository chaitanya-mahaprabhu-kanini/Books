import { BooksListComponent } from './books-list/books-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ""
  },
  {
    component: BooksListComponent,
    path: "books"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
