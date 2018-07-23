import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
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
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {


    users: User[];

    constructor(private chat: ChatService) {

this.userp();


    }


  userp(){
        this.users =   this.chat.getUsers();
        console.log(this.users);
    }
  }
