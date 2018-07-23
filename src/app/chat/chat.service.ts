import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList}  from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import {ChatMessage} from './chat-message.model';
import { map } from 'rxjs/operators';
@Injectable()
export class ChatService {
  chatMessages: FirebaseListObservable<ChatMessage[]>;
//chatMessages = [];




constructor( private db: AngularFireDatabase) {}


 sendMessage(msg:string) {
      const timestamp = this.getTimeStamp();
      const timestamp2 = this.getTimeStamp2();
   firebase.auth().onAuthStateChanged(function(user) {

   if (user) {
      firebase.database().ref('messages/').push({
      message: msg,
      timeSent: timestamp,
      timeSent2: timestamp2,
      userName: user.displayName,
      email: user.email });
  }
});
console.log("SENDMENSAJES");
}


getMessages(){

 var returnArr=[];
      firebase.database().ref("messages/").orderByKey().on("child_added", function(snapshot) {
         returnArr.push(snapshot.val());
      });
  return returnArr;
}

getUsers(){

 var returnArr2 = [];

      firebase.database().ref("users_hire/").orderByKey().on("child_added", function(snapshot) {
         returnArr2.push(snapshot.val());
      });
  return returnArr2;
}


getTimeStamp() {
  const now = new Date();
  const date = now.getUTCFullYear() + '/' +
               (now.getUTCMonth() + 1) + '/' +
               now.getUTCDate();
  const time = now.getUTCHours() + ':' +
               now.getUTCMinutes() + ':' +
               now.getUTCSeconds();

  return (date);
}

getTimeStamp2() {
  const now = new Date();
  const date = now.getUTCFullYear() + '/' +
               (now.getUTCMonth() + 1) + '/' +
               now.getUTCDate();
  const time = now.getUTCHours() + ':' +
               now.getUTCMinutes() + ':' +
               now.getUTCSeconds();

  return (time);
}
}
