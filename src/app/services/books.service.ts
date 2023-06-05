import { Book } from './../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>("https://localhost:7179/api/Books");
  }

  addBook(addBookRequest: Book): Observable<Book>{
    return this.http.post<Book>("https://localhost:7179/api/Books", addBookRequest);
  }
}
