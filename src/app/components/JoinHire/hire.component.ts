import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css', '../JoinPro/registro/registro.component.css']
})
export class HireComponent  {


    error: any[];
    constructor(public af: AngularFireAuth,private router: Router) {
      }
      onSubmit(formData) {
        console.log("hola");

          if(formData.valid) {
             this.af.auth.createUserAndRetrieveDataWithEmailAndPassword(
              formData.value.Email,
              formData.value.Password
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
