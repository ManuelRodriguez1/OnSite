import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChatService } from '../../../../chat/chat.service';
import { ChatMessage } from '../../../../chat/chat-message.model';
import * as firebase from 'firebase/app';
export class User {
    uid?: string;
    apellido?: string;
    correo?: string;
    nombre?: string;
    rol?: string;
    status?: string;
    telefono?: string;
    zipcode?: string;
}
@Component({
  selector: 'app-menuinbox',
  templateUrl: './menuinbox.component.html',
  styleUrls: ['./menuinbox.component.css']
})


export class MenuinboxComponent implements OnInit, OnChanges{

  users: User[];

    feed=[];

    nombre=[];
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

     ngOnChanges() {

       this.feed = this.chat.getMessages();

         console.log(this.feed);
     }
  constructor(private chat:ChatService) {

  this.userp();


}
ngOnInit() {
  this.nombre=  this.datoshire();
   this.feed = this.chat.getMessages();


}
datoshire(){

 var returnAr=[];
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     firebase.database().ref('/users_hire/'+user.uid).once('value', function(snapshot) {
           returnAr.push(snapshot.val());
});
    }
  });


return returnAr;


}

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
    userp(){
    
          this.users =   this.chat.getUsers();
          console.log(this.users);
      }

}
