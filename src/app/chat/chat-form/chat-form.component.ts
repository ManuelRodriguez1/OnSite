import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {
  message: string;
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
}