import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  bookDetails: any = {
    title: "",
    isbn: "",
    author: "",
    year: 0
  };
  constructor(private route: ActivatedRoute, private booksService: BooksService, private router: Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => {
        const id = params.get('id');

        if(id){
          this.booksService.getBook(id).subscribe({
            next: (response) => {
              this.bookDetails
            }
          });
        }
      }
    })
  }

  updateBook(){
    this.booksService.updateBook("1", this.bookDetails).subscribe({
      next: (response) => {
        this.router.navigate(['books']);
      }
    });
  }
}
