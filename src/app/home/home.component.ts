import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin:boolean=false;

  isLoginClick(){
    this.isLogin=true;
    return;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
