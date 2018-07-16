import { Component, OnInit } from '@angular/core';
 import * as $ from 'jquery';
 import * as firebase from 'firebase/app';
@Component({
  selector: 'app-menunewproyect',
  templateUrl: './menunewproyect.component.html',
  styleUrls: ['./menunewproyect.component.css','../../../JoinPro/registro/select/select.component.css','../../../JoinPro/registro/registro.component.css']
})
export class MenunewproyectComponent implements OnInit {
  datos= [];
  next = 0;
  selectedValue;
botonDesabilitado="";
nombre="Type project name.";
placeholder = 'Select Job Category.';
click = false;
rotar = '';
aparecer = '';
skill = '';
click2 = false;
rotar2 = '';
aparecer2 = '';
skill2 = '';
list = [];
list2 = [];
list3 = [];
click3 = false;
rotar3 = '';
aparecer3 = '';
skill3 = '';
click4= false;
rotar4 = '';
aparecer4 = '';
skill4= '';
listulti= [];
btExplorno;
n1;
n2;
n3;
n4;
btExplor;
constructor() {
this.VerDatosTiempoReal1();

this.list2 = [
  {
    "especifico": this.skill+" Hanger"
  },
  {
    "especifico": this.skill+" Apprentice"
  },
  {
    "especifico": "Metal Framer"
  },
  {
    "especifico": "Metal Framer Apprentice"
  },
  {
    "especifico": this.skill+" Finisher"
  },
  {
    "especifico": "Fire Taper"
  }
]
this.list3 = [
  {
    "name": "1"
  },
  {
    "name": "2"
  },
  {
    "name": "3"
  },
  {
    "name": "4"
  },
  {
    "name": "5"
  },
  {
    "name": "6"
  }
]
}
VerDatosTiempoReal1(){
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

   this.list=returnArr;
}
  menu(){
    this.click = !this.click;
    if(this.click == true){
      this.aparecer = 'desplegar';
      this.rotar = 'arrow2';
    }else{
      this.aparecer = '';
      this.rotar = '';
    }
  }

  ngOnInit() {
    for(var i = 0; i <= 15; i++){
      this.listulti.push('{"cat"},{"mus"}');
    }
    $(document).ready(function() {
    $("#nombreProyecto").click(function(){
      $("#nombreProyecto").val("");
    });
    });

        this.datos=this.obtener_localstorage();
        this.nombre=this.datos[0];
        this.skill=this.datos[1];
        this.skill2=this.datos[2];
        this.skill3=this.datos[3];


    this.list2 = [
      {
        "especifico": this.skill+" Hanger"
      },
      {
        "especifico": this.skill+" Apprentice"
      },
      {
        "especifico": "Metal Framer"
      },
      {
        "especifico": "Metal Framer Apprentice"
      },
      {
        "especifico": this.skill+" Finisher"
      },
      {
        "especifico": "Fire Taper"
      }
    ]

    }
    menu2(){
      this.click2 = !this.click2;
      if(this.click2 == true){
        this.rotar2 = 'arrow2';
        this.aparecer2 = 'desplegar2';
      }else{
        this.rotar2 = '';
        this.aparecer2 = '';
      }

    }

    menu3(){
      this.click3 = !this.click3;
      if(this.click3 == true){
        this.rotar3 = 'arrow2';
        this.aparecer3 = 'desplegar2';
      }else{
        this.rotar3 = '';
        this.aparecer3 = '';
      }

    }

    menu4(){
      this.click4 = !this.click4;
      if(this.click4 == true){
        this.rotar4 = 'arrow2';
        this.aparecer4 = 'desplegar2';
      }else{
        this.rotar4 = '';
        this.aparecer4 = '';
      }

    }
        seguir(){
          this.n1=$("#nombreProyecto").val();
          this.n2=$("#skill").val();
          this.n3=$("#skill2").val();
          this.n4=$("#skill3").val();
          console.log(this.n1);

        if(this.next==0){
       if($("#nombreProyecto").val()=="" || $("#nombreProyecto").val()=="undefined" || $("#nombreProyecto").val()=="Type project name."){
              $("#net").attr("disabled");
            }else{
            $("#net").removeAttr("disabled");

          this.grabar_localstorage(this.n1,this.n2,this.n3,this.n4);

            this.next++;
            }
          } else
          if(this.next==1){
            if($("#skill").val()=="" || $("#skill").val()=="undefined" ){
                 $("#net").attr("disabled");
                 }else{
               $("#net").removeAttr("disabled");


                  this.grabar_localstorage(this.n1,this.n2,this.n3,this.n4);
                    this.next++;
                 }
          } else
          if(this.next==2){

             //this.grabar_localstorage($("#nombreProyecto").val(),0);


            this.next++;
          }
        }
        back(){
          this.next--;
        }
        obtener_localstorage(){
      let persona=JSON.parse(localStorage.getItem("datos"));
          console.log(persona);
              return persona;

        }
        almacenar(e){
          this.click = !this.click;
          this.aparecer = '';
          this.rotar = '';
          this.skill = e;
        //  this.ngOnInit();
        }
        almacenar2(e){
          this.click2 = !this.click2;
          this.aparecer2 = '';
          this.rotar2 = '';
          this.skill2 = e;
        }
        almacenar3(e){
          this.click3 = !this.click3;
          this.aparecer3 = '';
          this.rotar3 = '';
          this.skill3 = e;
        }
        cerrar(){
          this.skill = '';
          this.skill2 = '';
          this.aparecer2 = '';
          this.aparecer = '';
          this.rotar2 = '';
          this.rotar = '';
          this.click = false;
          this.click2 = false;
        }
        cerrar2(){
          this.skill2 = '';
          this.click = false;
          this.click2 = false;
        }
      /*
selectedValue=obtener_localstorage()
  console.log(selectedValue);
  if(selectedValue!=null){
    localStorage.setItem("selectedValue",selectedValue);
  }
}
eliminar_localstorage(){
    let persona=JSON.parse(localStorage.getItem("persona"));
    localStorage.removeItem("persona");

}*/


grabar_localstorage(n1,n2,n3,n4){
    var datos = [];
    datos[0] = n1;
    datos[1] = n2;
    datos[2] = n3;
    datos[3] = n4;



  console.log(datos);
  localStorage.setItem("datos", JSON.stringify(datos));


}
btExplor1(){
  this.btExplorno="btExplorno";
  this.btExplor ="disBlox";
}
}
