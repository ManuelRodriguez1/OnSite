import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../service/service.service';
import { Model } from '../../../../model/model';
import 'rxjs/add/operator/do';
// import { element } from 'protractor';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['../estilos.scss']
})
export class SelectComponent implements OnInit {
  
  placeholder = 'Select Skills.';
  //Estilos
  aparecer = '';
  aparecer2 = '';
  rotar = '';
  rotar2 = '';
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
  
    
  
  
  constructor(private service: ServiceService) { }

  ngOnInit() {
    // this.service.getData()
    // .snapshotChanges().subscribe(item => {
    //   this.list = [];
    //   item.forEach(element => {
    //    var x = element.payload.toJSON();
    //     //console.log(x);
    //     x["$id"] = element.key; 
    //    this.list.push(x as Model);
    //   })
    // })

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

  menu(){
    this.click = !this.click;
    if(this.click == true){
      this.placeholder = 'Select Job Category.';
      this.aparecer = 'desplegar';
      this.rotar = 'arrow2';
    }else{
      this.placeholder = 'Select Skills.';
      this.aparecer = '';
      this.rotar = '';
    }
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

  almacenar(e){
    this.click = !this.click;
    this.placeholder = 'Select Skills.';
    this.aparecer = '';
    this.rotar = '';
    this.skill = e;
    this.ngOnInit();
  }

  almacenar2(e){
    this.click2 = !this.click2;
    this.aparecer2 = '';
    this.rotar2 = '';
    this.skill2 = e;
  }

  cerrar(){
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

  cerrar2(){
    this.skill2 = '';
    this.click = false;
    this.click2 = false;
  }

}

