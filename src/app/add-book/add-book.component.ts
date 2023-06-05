import { BooksService } from './../services/books.service';
import { Book } from './../models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  addBookRequest: Book = {
    Title: "",
    ISBN: "",
    Author: "",
    Year: 0
  };
  constructor(private bookService: BooksService){}

  ngOnInit(): void {
    
  }

  addBook(){
    this.bookService.addBook(this.addBookRequest).subscribe({next: (book) => {
      console.log(book);
    }

    })
  }

}
