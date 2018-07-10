import { Component, OnInit } from '@angular/core';
 import * as $ from 'jquery';
 import * as firebase from 'firebase/app';
@Component({
  selector: 'app-menunewproyect',
  templateUrl: './menunewproyect.component.html',
  styleUrls: ['./menunewproyect.component.css','../../../JoinPro/registro/select/select.component.css','../../../JoinPro/registro/registro.component.css']
})
export class MenunewproyectComponent implements OnInit {
  next = 2;
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
   console.log(returnArr);
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
    $(document).ready(function() {
    $("#nombreProyecto").click(function(){
      $("#nombreProyecto").val("");
    });
    });

    if(this.obtener_localstorage(4)!=null){
        this.nombre=this.obtener_localstorage(0);
        this.skill=this.obtener_localstorage(1);
        this.skill2=this.obtener_localstorage(2);
        this.skill3=this.obtener_localstorage(3);
    }

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

        seguir(){
        if(this.next==0){
       if($("#nombreProyecto").val()=="" || $("#nombreProyecto").val()=="undefined" || $("#nombreProyecto").val()=="Type project name."){
              $("#net").attr("disabled");
            }else{
            $("#net").removeAttr("disabled");
               this.grabar_localstorage($("#nombreProyecto").val(),0);
            this.grabar_localstorage("datos",4);

            }
          }
          if(this.next==1){
            if($("#skill").val()=="" || $("#skill").val()=="undefined" ){
                 $("#net").attr("disabled");
                 }else{
               $("#net").removeAttr("disabled");
                 this.grabar_localstorage($("#skill").val(),1);
                 this.grabar_localstorage($("#skill2").val(),2);
                 this.grabar_localstorage($("#skill3").val(),3);

//                   this.next++;
                 }





          }
          if(this.next==2){
            this.grabar_localstorage($("#skill").val(),1);
            this.grabar_localstorage($("#skill2").val(),2);
            this.grabar_localstorage($("#skill3").val(),3);

            this.next++;

          }
          /*if(this.obtener_localstorage(4)!=null){
              this.nombre=this.obtener_localstorage(0);
          }*/

              this.next++;
        }
        back(){
          this.next--;
        }

        obtener_localstorage(valor){
          if(valor==0){
              return localStorage.getItem("nombre");
          }
          if(valor==1){
              return localStorage.getItem("skill");
          }
          if(valor==2){
              return localStorage.getItem("skill2");
          }
          if(valor==3){
              return localStorage.getItem("skill3");
          }
          if(valor==4){
              return localStorage.getItem("datos");
          }

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
grabar_localstorage(valor,id){
  if(valor!=null && id==0){
    localStorage.setItem("nombre",valor);
  }
  if(valor!=null  && id==1){
    localStorage.setItem("skill",valor);
  }
  if(valor!=null  && id==2){
    localStorage.setItem("skill2",valor);
  }
  if(valor!=null  && id==3){
    localStorage.setItem("skill3",valor);
  }
  if(valor!=null  && id==4){
    localStorage.setItem("datos",valor);
  }


}

}
