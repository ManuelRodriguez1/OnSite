import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../../chat/chat.service';
@Component({
  selector: 'app-menuinbox',
  templateUrl: './menuinbox.component.html',
  styleUrls: ['./menuinbox.component.css']
})
export class MenuinboxComponent {

  message: string;
  vista = false;
  modal = false;
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

  offer = '';
  constructor(private chat:ChatService ) { }


  send() {

    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }

  }

    call(e){
      this.vista = !this.vista;
    }
    mostrar(){
      this.modal = !this.modal;
      this.offer = '';
    }

    oferta(smallform){
      console.log(smallform);
      this.offer = smallform.value.oferta;
    }

}
