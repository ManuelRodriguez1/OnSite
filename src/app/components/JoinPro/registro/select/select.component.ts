import { Component, OnInit } from '@angular/core';
import { RegistroComponent } from '../registro.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['../estilos.scss']
})
export class SelectComponent implements OnInit {
  
  placeholder = 'Select Skills.';

  list = {"hola1": "hola2"};
  constructor() { }

  ngOnInit() {
  }

  menu(){
    this.placeholder = 'Select Job Category.';
  }

}
