import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css', '../../JoinPro/registro/registro.component.css']
})
export class HireComponent  {


    error: any[];

    constructor(public af: AngularFireAuth,private router: Router) {
      }
      onSubmit(formData) {


          if(formData.valid) {
            console.log("hola");
             this.af.auth.createUserAndRetrieveDataWithEmailAndPassword(
              formData.value.Email,
              formData.value.Password

             ).then(
               (success) => {
                  var user = firebase.auth().currentUser;
                  user.updateProfile({
                    displayName: formData.value.FirstName+" "+formData.value.LastName,
                    photoURL: "",
                    phoneNumber: formData.value.PhoneNumber,
                    zipcode: "belxy",
                    status:'online'
                  });

                  firebase.database().ref('users_hire/'+ user.uid).set({
                  nombre: formData.value.FirstName,
                  apellido: formData.value.LastName,
                  telefono: formData.value.PhoneNumber,
                  correo: user.email,
                  zipcode: formData.value.Entercityorzipcode,
                  rol: "hire",
                  status:'online'

                });
              // this.router.navigate(['/HirePriComponent'])
        //      this.router.navigate(['chat'])
             }).catch(
               (err) => {
               this.error = err.message;

             })
           }
         }



}
