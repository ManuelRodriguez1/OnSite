import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['../estilos.scss','./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  list = [
    {"cliente": "Customer 1"},
    {"cliente": "Customer 2"},
    {"cliente": "Customer 3"},
  ]
  add = 4;
  constructor() { }

  ngOnInit() {
  }

  addc(){
    this.list.push({"cliente":"Customer "+this.add});
    this.add++;
  }

}
