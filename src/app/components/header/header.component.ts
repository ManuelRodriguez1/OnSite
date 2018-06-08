import { Component, OnInit } from '@angular/core';
  import { AngularFireAuth } from 'angularfire2/auth';
  import * as firebase from 'firebase/app';
  import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    Sesion = true;
    constructor(public af: AngularFireAuth,private router: Router) {
      this.af.authState.subscribe(auth => {
        if(auth) {
          this.Sesion=true;
        }else{
            this.Sesion=false;
        }
          console.log(this.Sesion);
      });
     }
     logout() {
        this.af.auth.signOut();
        console.log('logged out');
        this.router.navigateByUrl('/');
     }
    ngOnInit() {
    }
  }
