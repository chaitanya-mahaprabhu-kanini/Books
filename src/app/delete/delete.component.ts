import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  id: string = "";
  router: any;
  constructor(private bookService: BooksService){}

  ngOnInit(): void {
    
  }

  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe({
      next: (response => {
        this.router.navigate(['books']);
      })
    })
  }

}
