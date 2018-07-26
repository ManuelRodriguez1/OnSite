import {
    Component, OnInit
}
from '@angular/core';
import * as $ from 'jquery';
import * as firebase from 'firebase/app';
import {
    NouisliderModule
}
from 'ng2-nouislider';

@Component({
    selector: 'app-menunewproyect',
    templateUrl: './menunewproyect.component.html',
    styleUrls: ['./menunewproyect.component.css', '../../../JoinPro/registro/select/select.component.css', '../../../JoinPro/registro/registro.component.css']
})
export class MenunewproyectComponent implements OnInit {
    datos = [];
    next = 0;
    selectedValue;
    botonDesabilitado = "";
    nombre = "Type project name.";
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
    list4 = [];
    click3 = false;
    rotar3 = '';
    aparecer3 = '';
    skill3 = '';
    click4 = false;
    rotar4 = '';
    aparecer4 = '';
    skill4 = '';
    listulti = [];
    btExplorno;
    n1 = '';
    n2 = '';
    n3 = '';
    n4 = '';
    btExplor;
    Address = "";
    timeframe1;
    timeframe2;
    check1 = "";
    check2 = "";
    finish = [];
    radius;
    constructor() {
        var el, newPoint, newPlace, offset, width;

        this.VerDatosTiempoReal1();

        this.list2 = [{
            "especifico": this.skill + " Hanger"
        }, {
            "especifico": this.skill + " Apprentice"
        }, {
            "especifico": "Metal Framer"
        }, {
            "especifico": "Metal Framer Apprentice"
        }, {
            "especifico": this.skill + " Finisher"
        }, {
            "especifico": "Fire Taper"
        }]
        this.list3 = [{
            "name": "1"
        }, {
            "name": "2"
        }, {
            "name": "3"
        }, {
            "name": "4"
        }, {
            "name": "5"
        }, {
            "name": "6"
        }]

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

    ngOnInit() {

        for (var i = 0; i <= 15; i++) {
            this.listulti.push('{"cat"},{"mus"}');
        }
        $(document).ready(function() {
            $("#nombreProyecto").click(function() {
                $("#nombreProyecto").val("");
            });
        });
        if (this.obtener_localstorage(1)) {
            this.datos = this.obtener_localstorage(1);
            this.skill = this.datos[1];
            this.skill2 = this.datos[2];
            this.skill3 = this.datos[3];
            if (this.datos[4] == "on") {
                this.check1 = "checked";
            }
            if (this.datos[5] == "on") {
                this.check2 = "checked";
            }

        }

        if (this.obtener_localstorage(2)) {
            this.nombre = this.obtener_localstorage(2);
        }

        if (this.obtener_localstorage(3)) {
            this.finish = this.obtener_localstorage(3);

            this.Address = this.finish[0];
            this.timeframe1 = this.finish[1];
            this.timeframe2 = this.finish[2];
            this.radius = this.finish[3];
        }

        this.list2 = [{
            "especifico": this.skill + " Hanger"
        }, {
            "especifico": this.skill + " Apprentice"
        }, {
            "especifico": "Metal Framer"
        }, {
            "especifico": "Metal Framer Apprentice"
        }, {
            "especifico": this.skill + " Finisher"
        }, {
            "especifico": "Fire Taper"
        }]
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
    menu3() {
        this.click3 = !this.click3;
        if (this.click3 == true) {
            this.rotar3 = 'arrow2';
            this.aparecer3 = 'desplegar2';
        } else {
            this.rotar3 = '';
            this.aparecer3 = '';
        }
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
        if (this.next == 0) {
            if ($("#nombreProyecto").val() == "" || $("#nombreProyecto").val() == "undefined" || $("#nombreProyecto").val() == "Type project name.") {
                $("#net").attr("disabled");
            } else {
                $("#net").removeAttr("disabled");
                this.next++;
                localStorage.setItem("nombre_proyecto", $("#nombreProyecto").val());
            }
        } else
        if (this.next == 1) {
            if ($("#skill").val() == "" || $("#skill").val() == "undefined") {
                $("#net").attr("disabled");
            } else {
                $("#net").removeAttr("disabled");
                this.grabar_localstorage();
                this.next++;
            }
        } else
        if (this.next == 2) {

            //this.grabar_localstorage($("#nombreProyecto").val(),0);
            this.finish1();
            this.next++;
        }

        //  console.log(this.next++);
    }
    back() {
        this.next--;
    }
    obtener_localstorage(num) {
        if (num == 1) {
            return JSON.parse(localStorage.getItem("datos"));
        } else if (num == 2) {
            return localStorage.getItem("nombre_proyecto");
        } else if (num == 3) {
            return JSON.parse(localStorage.getItem("finish"));
        }

    }
    almacenar(e) {
        this.click = !this.click;
        this.aparecer = '';
        this.rotar = '';
        this.skill = e;
        //  this.ngOnInit();
    }
    almacenar2(e) {
        this.click2 = !this.click2;
        this.aparecer2 = '';
        this.rotar2 = '';
        this.skill2 = e;
    }
    almacenar3(e) {
        this.click3 = !this.click3;
        this.aparecer3 = '';
        this.rotar3 = '';
        this.skill3 = e;
    }
    almacenar4(e) {
        this.click4 = !this.click4;
        this.aparecer4 = '';
        this.rotar4 = '';
        this.skill4 = e;
    }
    cerrar() {
        this.skill = '';
        this.skill2 = '';
        this.aparecer2 = '';
        this.aparecer = '';
        this.rotar2 = '';
        this.rotar = '';
        this.click = false;
        this.click2 = false;
    }
    cerrar2() {
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
    grabar_localstorage() {
        var datos = [];
        datos[0] = "hola";
        datos[1] = $("#skill").val();
        datos[2] = $("#skill2").val();
        datos[3] = $("#skill3").val();
        datos[4] = $('input:checkbox[name=check1]:checked').val();
        datos[5] = $('input:checkbox[name=check2]:checked').val();

        localStorage.setItem("datos", JSON.stringify(datos));
    }
    finish1() {

        var finish = [];
        finish[0] = $('#Address').val();
        finish[1] = $('#timeframe1').val();
        finish[2] = $('#timeframe2').val();
        finish[3] = $('#radius').val();
        finish[4] = "500";
        //  finish[5] = $('#botonsi').val();
        localStorage.setItem("finish", JSON.stringify(finish));
    }

    btExplor1() {
        this.btExplorno = "btExplorno";
        this.btExplor = "disBlox";
    }

}
