import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import {ChatMessage} from './chat-message.model';
import { map } from 'rxjs/operators';
@Injectable()
export class ChatService {
  chatMessages: FirebaseListObservable<ChatMessage[]>;



constructor( private db: AngularFireDatabase) {}


 sendMessage(msg:string) {
      const timestamp = this.getTimeStamp();
   firebase.auth().onAuthStateChanged(function(user) {

   if (user) {
      firebase.database().ref('messages/').push({
      message: msg,
      timeSent: timestamp,
      userName: user.displayName,
      email: user.email });
  }
});
  console.log("SENDMENSAJES");
}


getMessages() : FirebaseListObservable<ChatMessage[]>{

 var returnArr = [];
/*   console.log("GETMENSAJES");
   firebase.database().ref('messages/').on('value', function(snapshot) {

    });
    console.log(returnArr);
      return returnArr;*/

      firebase.database().ref("messages/").orderByKey().on("child_added", function(snapshot) {
         returnArr.push(snapshot.val());
      });
  return returnArr;
}


getTimeStamp() {
  const now = new Date();
  const date = now.getUTCFullYear() + '/' +
               (now.getUTCMonth() + 1) + '/' +
               now.getUTCDate();
  const time = now.getUTCHours() + ':' +
               now.getUTCMinutes() + ':' +
               now.getUTCSeconds();

  return (date + ' ' + time);
}
}
