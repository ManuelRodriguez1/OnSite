import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  next = 0;
  constructor() { }

  ngOnInit() {
  }

  seguir(){
    this.next++;
  }

  back(){
    this.next--;
  }

  
}
