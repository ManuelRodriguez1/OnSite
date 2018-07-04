import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-registroclientes',
  templateUrl: './registroclientes.component.html',
  styleUrls: ['./registroclientes.component.css']
})
export class RegistroclientesComponent implements OnInit {
Guardar2;
  list = [
    {
      "categorias": "Concrete"
    },
    {
      "categorias": "Decorator"
    },
    {
      "categorias": "Drywall"
    },
    {
      "categorias": "Electrical"
    },
    {
      "categorias": "Excavation"
    },
    {
      "categorias": "Flooring"
    },
    {
      "categorias": "General Labor"
    },
    {
      "categorias": "Insulation"
    },
    {
      "categorias": "Interior Finish Carpentry"
    },
    {
      "categorias": "Ironworker"
    },
    {
      "categorias": "Landscaper"
    },
    {
      "categorias": "Mason"
    },
    {
      "categorias": "Plastering"
    },
    {
      "categorias": "Plumbing"
    },
    {
      "categorias": "Roofer"
    },
    {
      "categorias": "Waterproof Installation"
    }
  ];
  key: any;

  childData = [];


   constructor() {
     this.childData  =this.VerDatosTiempoReal();
   }
   onSubmit(formData){

     firebase.database().ref('empleados/').push({
         nombre: formData.value.nombre,
         apellido: formData.value.apellido,
         telefono: formData.value.telefono,
         email: formData.value.email,
         zipcode: formData.value.zipcode,
         skills: formData.value.skills
      }, function(error) {
        if (error) {
          console.log("Error: "+error);
          // The write failed...
        } else {
          // Data saved successfully!
          console.log("Guardado con exito");
          formData.reset();
        }
      });


    }

    VerDatosTiempoReal(){
  var returnArr = [];
  //console.log(childKey);
  firebase.database().ref("empleados").on('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
     var childKey = childSnapshot.key;
     var childData = childSnapshot.val();
      returnArr.push(childData);
   });


  });
  return returnArr;
    }

   ngOnInit() {


   }
  }