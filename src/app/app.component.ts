import { Component ,OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit() {
    /*  var concc=1;
    $(document).ready(function(){

          $(".btn111").click(function(){
            if(concc==1){
              concc=2;
                $(".LoginCaja").removeClass("btnPrincipal2");
                $(".LoginCaja").addClass("btnPrincipal1");
            }else{
                $(".LoginCaja").removeClass("btnPrincipal1");
                $(".LoginCaja").addClass("btnPrincipal2");
              concc=1;
            }

          });
      });*/
    }

}
