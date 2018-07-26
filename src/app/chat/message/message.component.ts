import {
    Component,
    OnInit,
    Input
}

from '@angular/core';
import {
    ChatService
}

from '../chat.service';
import {
    ChatMessage
}

from '../chat-message.model';
@Component( {
    selector: 'app-message', templateUrl: './message.component.html', styleUrls: ['./message.component.css']
}

) export class MessageComponent implements OnInit {
    @Input() chatMessage: ChatMessage;
    userEmail: string;
    userName: string;
    messageContent: string;
    timeStamp: Date=new Date();
    timeStamp2: Date=new Date();
    constructor() {}
    ngOnInit(chatMessage=this.chatMessage) {
        //  console.log(chatMessage.timeSent);
        this.messageContent=chatMessage.message;
        this.timeStamp=chatMessage.timeSent;
        this.userEmail=chatMessage.email;
        this.userName=chatMessage.userName;
        this.timeStamp2=chatMessage.timeSent2;
    }
}
