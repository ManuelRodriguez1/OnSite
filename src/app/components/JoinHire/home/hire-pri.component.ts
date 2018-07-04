import {  Component, OnInit, AfterViewInit} from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
// import * as $ from 'jquery';

@Component({
    selector: 'app-hire-pri',
    templateUrl: './hire-pri.component.html',
    styleUrls: ['./hire-pri.component.css', '../../JoinPro/registro/select/select.component.css']
})
export class HirePriComponent {
    //mySwiper = Swiper;
    menuVista = "Inbox";
    Sesion = true;
    placeholder = "Search projects.";
    aparecer = '';
    rotar = '';
    click = false;
    mostrar1 = "mostrar";
    mostrar2 = "mostrar2";
    list=[];
    next = 0;
    constructor(public af: AngularFireAuth, private router: Router) {
     this.VerDatosTiempoReal();
        this.af.authState.subscribe(auth => {
            if (auth) {
                this.Sesion = true;
            } else {
                this.Sesion = false;
            }

        })

    }
    VerDatosTiempoReal(){
    var returnArr = [];
    //console.log(childKey);
    firebase.database().ref("proyectos").on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    returnArr.push(childData);
    });

    return returnArr;
    });
    console.log(returnArr);
    this.list=returnArr;
    }

    home() {
        this.menuVista = "Home";

    }
    inbox() {
        this.menuVista = "Inbox";
    }
    projects() {
        this.menuVista = "Projects";
    }

    track() {
        this.menuVista = "Track";
    }
    explore() {
        this.menuVista = "Explore";
    }
   start() {
          this.menuVista = "Start";
    }
    Start
    menu() {
        this.click = !this.click;
        if (this.click == true) {
            this.aparecer = 'desplegar';
            this.rotar = 'arrow2';
        } else {

            this.aparecer = '';
            this.rotar = '';
        }
    }

    mostrar(t) {
        console.log(t);
        if (this.mostrar1 == "nomostrar") {
            this.mostrar1 = 'mostrar';
        } else {
            this.mostrar1 = 'nomostrar';
        }
    }
    mostrar22(t) {
        console.log(t);
        if (this.mostrar1 == "nomostrar") {
            this.mostrar1 = 'mostrar';
        } else {
            this.mostrar1 = 'nomostrar';
        }
    }
    nomostrar() {
        if (this.mostrar1 == "nomostrar") {
            this.mostrar1 = 'mostrar';
        } else {
            this.mostrar1 = 'nomostrar';
        }
    }


      seguir(){
        this.next++;
      }

      back(){
        this.next--;
      }

}
