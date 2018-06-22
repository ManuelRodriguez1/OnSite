import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  m = 1;
  b = 1;
  constructor() { }

  ngOnInit() {
  }

  menu(e){
    this.m = e;
  }
  bola(e){
    this.b = e;
  }

}
