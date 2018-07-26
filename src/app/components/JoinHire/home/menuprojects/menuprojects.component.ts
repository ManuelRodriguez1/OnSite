import {
    Component,
    OnInit
}

from '@angular/core';
@Component( {
    selector: 'app-menuprojects', templateUrl: './menuprojects.component.html', styleUrls: ['./menuprojects.component.css', '../../../JoinPro/registro/select/select.component.css', '../../../JoinPro/registro/registro.component.css']
}

) export class MenuprojectsComponent implements OnInit {
    list=[];
    list3=[];
    click3=false;
    rotar3='';
    aparecer3='';
    skill3='';
    constructor() {
        this.list3=[ {
            "name": "1"
        }
        ,
        {
            "name": "2"
        }
        ,
        {
            "name": "3"
        }
        ,
        {
            "name": "4"
        }
        ,
        {
            "name": "5"
        }
        ,
        {
            "name": "6"
        }
        ,
        {
            "name": "2"
        }
        ,
        {
            "name": "3"
        }
        ,
        {
            "name": "4"
        }
        ,
        {
            "name": "5"
        }
        ,
        {
            "name": "6"
        }
        ]
    }
    targetClic() {
        console.log("holaaaaaaaaaaaaaaaaaa");
    }
    ngOnInit() {
        for(var i=0;
        i <=15;
        i++) {
            this.list.push('{"cat"},{"mus"}');
        }
    }
    menu3() {
        this.click3=!this.click3;
        if (this.click3==true) {
            this.rotar3='arrow2';
            this.aparecer3='desplegar2';
        }
        else {
            this.rotar3='';
            this.aparecer3='';
        }
    }
}
