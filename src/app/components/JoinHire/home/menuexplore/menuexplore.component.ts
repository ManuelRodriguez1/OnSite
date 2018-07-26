import {
    Component, OnInit
}
from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
    selector: 'app-menuexplore',
    templateUrl: './menuexplore.component.html',
    styleUrls: ['./menuexplore.component.css', '../../../JoinPro/registro/select/select.component.css', '../../../JoinPro/registro/registro.component.css', '../menunewproyect/menunewproyect.component.css']
})
export class MenuexploreComponent implements OnInit {
    list: any[];
    click = false;
    rotar = '';
    aparecer = '';
    skill = '';

    click4 = false;
    rotar4 = '';
    aparecer4 = '';
    skill4 = '';
    list4 = [];
    next = 0;
    constructor() {
        this.list4 = [{
            "name": "1000"
        }, {
            "name": "2000"
        }, {
            "name": "3000"
        }, {
            "name": "6000"
        }]
    }

    ngOnInit() {
        this.VerDatosTiempoReal1();
    }
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
    VerDatosTiempoReal1() {
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

        this.list = returnArr;
    }
    almacenar(dd) {
        this.next = 1;
        this.aparecer = '';
        this.rotar = '';
    }
    menu4() {
        this.click4 = !this.click4;
        if (this.click4 == true) {
            this.rotar4 = 'arrow2';
            this.aparecer4 = 'desplegar2';
        } else {
            this.rotar4 = '';
            this.aparecer4 = '';
        }
    }
    seguir() {
        this.next = 2;

    }
    back() {
        this.next = 0;
    }
}
