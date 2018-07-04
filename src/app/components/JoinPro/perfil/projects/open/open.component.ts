import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {

  list = [];

  constructor() { }

  ngOnInit() {
    for(var i = 0; i <= 15; i++){
      this.list.push('{"cat"},{"mus"}');
    }
  }

}
