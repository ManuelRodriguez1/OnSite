import { Component ,OnInit} from '@angular/core';
 import * as firebase from 'firebase/app';
 import { AngularFireAuth } from 'angularfire2/auth';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
name="";
email ="";
uid="";
  constructor(public af: AngularFireAuth,private router: Router){
    this.DatosDeSesion();
    this.InsertarDatos("belxy1", "belxy2", "belxy3", "belxy1");
    this.VerDatosTiempoReal();
    this.VerDatos();
  }
  /*
  Funcion DatosDeSesion se recupera todos los datos de la sesion inicia
  de la persona como nobre, email y id
  */
  DatosDeSesion(){

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("usuarioCorrecto");
    this.name = user.displayName;
    this.email = user.email;
    this.uid = user.uid;
  } else {
    console.log("usuarioincorrecto");
  }
});
}
/*
Funcion InsertarDatos se inserta los datos en la tabla preliminar todos usando database
*/
 InsertarDatos(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  /*
  Funcion VerDatosTiempoReal se visualizan los datos en la tabla  todos usando database
   esta funcion es importante cuando se dectecta que el dato cambie contantemente
   segun la base de datos es a tiempo real
  */
  VerDatosTiempoReal(){
  var starCountRef = firebase.database().ref('users/');
    starCountRef.on('value', function(snapshot) {
    console.log(snapshot.val());
    });
  }
/*
VerDatos Lee los datos una sola vez no obtiene los cambios de la base de datos
*/
  VerDatos(){
    alert("HOLAS");
     firebase.database().ref('/users/belxy1' ).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      console.log(snapshot.val());
    });
  }
   writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }


  ngOnInit() {

    }
}
