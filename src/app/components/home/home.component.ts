import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InicioSesionComponent } from "../Login/inicio-sesion/inicio-sesion.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 @ViewChild('child1') childOne:InicioSesionComponent;

  constructor() { }

  abrircerrar():void{
    this.childOne.function1();
  }

    ngOnInit() {
      this.childOne.emitEvent
      .subscribe(
        res =>
        {
        console.log("Atributo:" + res);
        }
      );
    }



}
