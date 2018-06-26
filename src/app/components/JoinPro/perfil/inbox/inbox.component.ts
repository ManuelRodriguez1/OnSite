import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  list = [
    {"estilo" : "green",
      "dispo" : "Available"},
      {"estilo" : "red",
      "dispo" : "Unavailable"},
      {"estilo" : "yellow",
      "dispo" : "Job in Process"},
      {"estilo" : "green",
      "dispo" : "Available"},
      {"estilo" : "green",
      "dispo" : "Available"},
      {"estilo" : "green",
      "dispo" : "Available"},
  ]

  vista = 1;

  constructor() { }

  ngOnInit() {
  }

  call(e){
    this.vista = 2;
  }

}
