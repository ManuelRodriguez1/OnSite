import { Component, OnInit,AfterViewInit} from '@angular/core';
  import { AngularFireAuth } from 'angularfire2/auth';
  import * as firebase from 'firebase/app';
  import { Router } from '@angular/router';
 // import * as $ from 'jquery';
declare var Swiper;
@Component({
  selector: 'app-hire-pri',
  templateUrl: './hire-pri.component.html',
  styleUrls: ['./hire-pri.component.css','../JoinPro/registro/select/select.component.css']
})
export class HirePriComponent implements AfterViewInit  {
     mySwiper = Swiper;
     menuVista="Home";
      Sesion = true;
      placeholder="What type of job do you need help with?";
      aparecer = '';
      rotar = '';
      click = false;

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

      constructor(public af: AngularFireAuth,private router: Router) {
        this.af.authState.subscribe(auth => {
          if(auth) {
            this.Sesion=true;
          }else{
              this.Sesion=false;
          }
            console.log("HireBien"+this.Sesion);
        });
       }

         ngAfterViewInit() {

           this.mySwiper =  new Swiper('.swiper-container', {
              spaceBetween: 15,
              direction: 'horizontal',
              loop: true,
              centeredSlides	:true,
              slidesPerView: 3,
              slideToClickedSlide	: true,
              scrollbar: '.swiper-scrollbar',
            });
         }



  home(){
    this.menuVista="Home";
    this.mySwiper =  new Swiper('.swiper-container', {
       spaceBetween: 15,
       direction: 'horizontal',
       loop: true,
       centeredSlides	:true,
       slidesPerView: 3,
       slideToClickedSlide	: true,
       scrollbar: '.swiper-scrollbar',
     });
     this.ngAfterViewInit();
  }
  inbox(){
    this.menuVista="Inbox";
  }
  projects(){
    this.menuVista="Projects";
  }
  ex
  track(){
    this.menuVista="Track";
  }
  explore(){
    this.menuVista="Explore";
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

}
