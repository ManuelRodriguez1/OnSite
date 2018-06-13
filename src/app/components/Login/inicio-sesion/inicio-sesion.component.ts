import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
error: any[];
  ngOnInit() {
  }
  constructor(public af: AngularFireAuth,private router: Router) {
    this.af.authState.subscribe(authState => {
    if(authState) {
   this.router.navigateByUrl('/registroHire');
    }
    });
   }
  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.signInWithEmailAndPassword(formData.value.email,formData.value.password)
      .catch(
        (err) => {
        this.error = err.message;
      })
    }

    }


}
