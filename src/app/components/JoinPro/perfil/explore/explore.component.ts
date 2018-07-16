import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  list = []
  constructor() { }

  ngOnInit() {
    for(var i = 0; i <= 20; i++){
      this.list.push('{"m":"2"}')
    }
  }
  clicked: number = null;
  activec(i: number){
    this.clicked = i;
  }

}
