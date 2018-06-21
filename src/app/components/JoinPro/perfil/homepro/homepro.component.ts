import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepro',
  templateUrl: './homepro.component.html',
  styleUrls: ['./homepro.component.css']
})
export class HomeproComponent implements OnInit {

  list = [
    {
      'nombre':'pepito 1'
    },
    {
      'nombre':'pepito 2'
    },
    {
      'nombre':'pepito 3'
    },
    {
      'nombre':'pepito 4'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }


}
