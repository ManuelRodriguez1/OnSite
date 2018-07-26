import {
    Component, OnInit, AfterViewInit, ViewChild
}
from '@angular/core';
import {
    AngularFireAuth
}
from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {
    Router
}
from '@angular/router';

// import * as $ from 'jquery';

@Component({
    selector: 'app-hire-pri',
    templateUrl: './hire-pri.component.html',
    styleUrls: ['./hire-pri.component.css']

})
export class HirePriComponent {
    //mySwiper = Swiper;

    menuVista = "Explore";
    m = 4;
    Sesion = true;

    mostrar1 = "mostrar";
    mostrar2 = "mostrar2";
    list = [];

    constructor(public af: AngularFireAuth, private router: Router) {

            //   this.VerDatosTiempoReal();
            this.af.authState.subscribe(auth => {
                if (auth) {
                    this.Sesion = true;
                } else {
                    this.Sesion = false;
                }

            })

        }
        //  list=[];
        //  VerDatosTiempoReal(){
        /*var returnArr = [];
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
        this.list=returnArr;*/
        //}
    menu(e) {
        if (e == 1) {
            this.menuVista = "Home";
        } else if (e == 2) {
            this.menuVista = "Inbox";
        } else if (e == 3) {
            this.menuVista = "Projects";
        } else if (e == 4) {
            this.menuVista = "Explore";
        } else if (e == 5) {
            this.menuVista = "Start";
        }
        this.m = e;
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

}
