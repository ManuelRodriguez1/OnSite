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
export class HirePriComponent implements AfterViewInit {
     mySwiper = Swiper;
      Sesion = true;
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
  ngOnInit() {

  //  $(".LoginCaja").css({"left":"0","width":"225px","background":"#FFFFFF"});
    //$(".LoginCaja").css("display","none");

  }

}
