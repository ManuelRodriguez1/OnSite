import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectComponent } from './select/select.component';
import { selector } from 'rxjs/operator/publish';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild(SelectComponent) select: SelectComponent;

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

  cerrar(){
    this.next--;
  }

  
}
