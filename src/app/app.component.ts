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
  /*  this.DatosDeSesion();
    this.InsertarDatos("belxy1", "belxy2", "belxy3", "belxy1");
    this.VerDatosTiempoReal();
    this.VerDatos();
    this.InsertarEnTablasSimultaneas("p", "pp", "ppp", "pppp", "ppppp");
    this.InsercionConMensajeDeError();
    this.EliminarDatos();*/
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
o los modifica si ya los encuentra
*/
 InsertarDatos(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: "simodifico",
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

     firebase.database().ref('/users/belxy1' ).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      console.log(snapshot.val());
    });
  }

  /*
  Obtén una clave para un nuevo mensaje. Escriba los datos de la nueva publicación
  simultáneamente en la lista de publicaciones  y en la lista de publicaciones del usuario.
  para cuando se requiere guardar los datos en tablas diferentes o tablas relacionales

*/
   InsertarEnTablasSimultaneas(uid, username, picture, title, body) {
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };


    var newPostKey = firebase.database().ref().child('post').push().key;


    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

/*
Inserta un elemento o lo modifica si ya lo encuentra en la tabla
si en el proceso hay algun error esta la funcionde error
*/

InsercionConMensajeDeError(){
  firebase.database().ref('users/' + "belxy1777").set({
     username: "moo",
     email: "miiiii",
     profile_picture : "imageUrl"
   }, function(error) {
     if (error) {
       console.log("siiiiiiiiii"+error);
       // The write failed...
     } else {
       // Data saved successfully!
       console.log("nooooooooooo");
     }
   });
 }

 /*
 Eliminar Datos
 */

 EliminarDatos(){
   firebase.database().ref('users/' + "belxy1").set({
  username: null,
   });
 }

  ngOnInit() {

    }
}
