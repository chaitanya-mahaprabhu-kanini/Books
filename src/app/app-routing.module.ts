import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
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
  },
  {
    component: AddBookComponent,
    path: "add"
  },
  {
    component: EditBookComponent,
    path: "edit/:id"
  },
  {
    component: DeleteComponent,
    path: "delete/:id"
  },
  {
    component: LoginComponent,
    path: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
