import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  rep: number[] = [];
  ngOnInit(): void {
    for(let i = 0;i < 2;i++){
      this.rep.push(i);
    }
  }
}
