import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Model2 } from '../model/model';
import { ServiceService } from '../service/service.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-registroclientes',
  templateUrl: './registroclientes.component.html',
  styleUrls: ['./registroclientes.component.css']
})
export class RegistroclientesComponent implements OnInit {

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

  model: Model2[];
  preserveSnapshot: true;


  constructor(private service: ServiceService, private af: AngularFireDatabase) {

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
  
   }

  ngOnInit() {

  }

}
