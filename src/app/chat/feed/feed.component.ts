import { Component, OnInit ,OnChanges} from '@angular/core';
import { ChatService } from '../chat.service';
import { ChatMessage } from '../chat-message.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges{

  feed: AngularFireList<ChatMessage[]>;
  constructor(private chat: ChatService) {



 }

  ngOnInit() {
   this.feed = this.chat.getMessages();


 }

 ngOnChanges() {

   this.feed = this.chat.getMessages();

     console.log(this.feed);
 }
}
