import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.css','../../../JoinPro/registro/select/select.component.css']
})
export class MenuhomeComponent implements OnInit {
  placeholder = "Search projects.";
  aparecer = '';
  rotar = '';
    list=[];
  click = false;
  constructor() { }

  ngOnInit() {
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
