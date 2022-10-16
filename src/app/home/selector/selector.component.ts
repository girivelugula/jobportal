import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {


  isLogin:boolean=false;

  isClick(){
    this.isLogin=true;
    return;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
