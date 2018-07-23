import { Component, OnInit ,Input} from '@angular/core';
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
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent implements OnInit {
  @Input() user: User;

  constructor() {

   }

  ngOnInit() {
  }

}
