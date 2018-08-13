import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css', 'select/select.component.css', 'reviews/reviews.component.css']
})
export class RegistroComponent implements OnInit {

  next = 0;
  placeholder = 'Select Skills.';
  //Estilos
  aparecer = '';
  aparecer2 = '';
  rotar = '';
  rotar2 = '';
  description;
  click = false;
  click2 = false;
  // list: Model[];
  skill = '';
  skill2 = '';
  list2
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
  error: any[];

  list3 = [
    { "cliente": "Customer 1" },
    { "cliente": "Customer 2" },
    { "cliente": "Customer 3" },
  ]
  add = 4;

  ver = "";
  ver1 = "nover";
  ver2 = "nover";

  emailCustomer = '';

  red0 = 'r';
  red1 = 'r';
  red2 = 'r';
  red3 = 'r';
  red4 = 'r';
  red5 = 'r';
  enable = false;
  emailval = false;

  constructor(public af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.list2 = [
      {
        "especifico": this.skill + " Hanger"
      },
      {
        "especifico": this.skill + " Apprentice"
      },
      {
        "especifico": "Metal Framer"
      },
      {
        "especifico": "Metal Framer Apprentice"
      },
      {
        "especifico": this.skill + " Finisher"
      },
      {
        "especifico": "Fire Taper"
      }
    ]
  }
  seguir() {
    this.next++;
    switch (this.next) {
      case 1:
        this.ver = "nover";
        this.ver1 = "ver";
        this.enable = false;
        break;
      case 2:
        this.ver2 = "ver";
        this.ver1 = "nover";
        break;
    }
  }

  back() {
    this.next--;
    switch (this.next) {
      case 0:
        this.ver = "";
        this.ver1 = "nover";
        this.ver2 = "nover";
        break;
      case 1:
        this.ver1 = "ver";
        this.ver2 = "nover";
        break;
    }
  }

  cerrar() {
    this.next--;

  }
  cerrar3() {
    this.skill = '';
    this.skill2 = '';
    this.aparecer2 = '';
    this.aparecer = '';
    this.rotar2 = '';
    this.rotar = '';
    this.placeholder = 'Select Skills.';
    this.click = false;
    this.click2 = false;
  }
  menu() {
    this.click = !this.click;
    if (this.click == true) {
      this.placeholder = 'Select Job Category.';
      this.aparecer = 'desplegar';
      this.rotar = 'arrow2';
    } else {
      this.placeholder = 'Select Skills.';
      this.aparecer = '';
      this.rotar = '';
    }
  }

  menu2() {
    this.click2 = !this.click2;
    if (this.click2 == true) {
      this.rotar2 = 'arrow2';
      this.aparecer2 = 'desplegar2';
    } else {
      this.rotar2 = '';
      this.aparecer2 = '';
    }

  }

  almacenar(e) {
    this.click = !this.click;
    this.placeholder = 'Select Skills.';
    this.aparecer = '';
    this.rotar = '';
    this.skill = e;
    this.ngOnInit();
  }

  almacenar2(e) {
    this.click2 = !this.click2;
    this.aparecer2 = '';
    this.rotar2 = '';
    this.skill2 = e;
    if (this.skill != '' && this.skill2 != '') {
      this.enable = true;
    }
  }

  cerrar2() {
    this.skill2 = '';
    this.click = false;
    this.click2 = false;
  }

  addc() {
    this.list3.push({ "cliente": "Customer " + this.add });
    this.add++;
  }

  focusout(texto) {
    this.emailCustomer += texto + ', ';
  }

  focus(data, e) {
    if (data == '') {
      switch (e) {
        case 0:
          this.red0 = 'red';
          break;
        case 1:
          this.red1 = 'red';
          break;
        case 2:
          this.red2 = 'red';
          break;
        case 3:
          this.red3 = 'red';
          break;
        case 4:
          this.red4 = 'red';
          break;
        case 5:
          this.red5 = 'red';
          break;
      }
    }
    if (data != '') {
      switch (e) {
        case 0:
          this.red0 = '';
          break;
        case 1:
          this.red1 = '';
          break;
        case 2:
          this.red2 = '';
          break;
        case 3:
          if (this.emailval) {
            this.red3 = '';
          } else {
            this.red3 = 'red';
          }
          break;
        case 4:
          this.red4 = '';
          break;
        case 5:
          this.red5 = '';
          break;
      }
    }
    if (this.red0 == '' && this.red1 == '' && this.red2 == '' && this.red3 == '' && this.red4 == '' && this.red5 == '') {
      this.enable = true;
    }
  }

  email(e) {
    var pattern = new RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}");
    if (pattern.test(e)) {
      this.emailval = true;
    } else {
      this.emailval = false;
    }

  }

  onSubmit(formData) {
    if (formData.valid) {
      this.af.auth.createUserWithEmailAndPassword(
        formData.value.Email,
        formData.value.Password
      ).then(
        (success) => {
          firebase.database().ref('users_pro').push({
            nombre: formData.value.FirstName,
            apellido: formData.value.LastName,
            telefono: formData.value.PhoneNumber,
            zipcode: formData.value.zipcode,
            skill: formData.value.skill,
            skill2: formData.value.skill2,
            customer: formData.value.customer,
            descripcion: formData.value.description,
            rol: "pro",
            status: 'online'
          });

          this.router.navigate(['/perfilPro']);
        }
      ).catch(
        (err) => {
          this.error = err.messsage;
        }
      )
    }
  }

}
