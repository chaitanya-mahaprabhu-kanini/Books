import { BooksService } from './../services/books.service';
import { Book } from './../models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit{
  present: boolean = true;
  b: Book[] = [];
  constructor(private booksService: BooksService){

  }
  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe({
      next: (books) => {
        console.log(books);
        this.b = books;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
