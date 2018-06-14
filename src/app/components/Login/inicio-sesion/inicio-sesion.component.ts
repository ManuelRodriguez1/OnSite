import { Component, OnInit, ViewChild,  Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeComponent } from '../../home/home.component';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
error: any[];
@Output() emitEvent:EventEmitter<any> = new EventEmitter();
estado:boolean = false;
cerrarAbrir="";
  ngOnInit() {


  }


       function1(){
    
        let fResponse = !this.estado;
        this.estado = fResponse;
          if(this.estado){
            this.emitEvent.emit("btnPrincipal1");
            this.cerrarAbrir="btnPrincipal1";
            }else{
                this.emitEvent.emit("btnPrincipal2");
                this.cerrarAbrir="btnPrincipal2";
            }
        return fResponse;

          }

  constructor(public af: AngularFireAuth,private router: Router) {
    this.af.authState.subscribe(authState => {
    if(authState) {
   this.router.navigateByUrl('/HirePriComponent');
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
