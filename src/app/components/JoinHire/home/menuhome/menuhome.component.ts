import {    Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-menuhome',
    templateUrl: './menuhome.component.html',
    styleUrls: ['./menuhome.component.css', '../../../JoinPro/registro/select/select.component.css']
})
export class MenuhomeComponent implements OnInit {
    placeholder = "Search projects.";
    aparecer = '';
    rotar = '';
    list = [];
    click = false;
    noaparee = "noaparee";
    noaparee2 = "noaparee2";
    contador1 = 0;

    constructor() {

    }

    ngOnInit() {
              this.list = this.VerDatosTiempoReal();
    }

    VerDatosTiempoReal() {
        var returnArr = [];
        var contador;
        //console.log(childKey);
        firebase.database().ref("newProyect").on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                returnArr.push(childData);

                contador=contador+1;
            });
        });
        console.log(returnArr);
        console.log(returnArr[1]);
        return returnArr;

    }

    saludo() {
        this.noaparee = "siaparece";
        this.noaparee2 = "siaparece2";

    }

    //  this.home.home();

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
}
