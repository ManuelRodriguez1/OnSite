import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent  {


  error: any[];
  constructor(public af: AngularFireAuth,private router: Router) {
    }
    onSubmit(formData) {
      console.log("hola");

        if(formData.valid) {
           this.af.auth.createUserAndRetrieveDataWithEmailAndPassword(
            formData.value.email,
            formData.value.password
           ).then(
             (success) => {
             this.router.navigate(['/HirePriComponent'])
           }).catch(
             (err) => {
             this.error = err.message;
           })
         }
       }


  }
