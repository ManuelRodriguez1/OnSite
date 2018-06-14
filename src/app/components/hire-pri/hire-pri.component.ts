import { Component, OnInit } from '@angular/core';
  import { AngularFireAuth } from 'angularfire2/auth';
  import * as firebase from 'firebase/app';
  import { Router } from '@angular/router';
  import * as $ from 'jquery';
@Component({
  selector: 'app-hire-pri',
  templateUrl: './hire-pri.component.html',
  styleUrls: ['./hire-pri.component.css']
})
export class HirePriComponent implements OnInit {

      Sesion = true;
      constructor(public af: AngularFireAuth,private router: Router) {
        this.af.authState.subscribe(auth => {
          if(auth) {
            this.Sesion=true;
          }else{
              this.Sesion=false;
          }
            console.log("HireBien"+this.Sesion);
        });
       }

  ngOnInit() {

  //  $(".LoginCaja").css({"left":"0","width":"225px","background":"#FFFFFF"});
    $(".LoginCaja").css("display","none");
  }

}
