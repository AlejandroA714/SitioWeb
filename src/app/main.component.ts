import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  LOGGED_IN:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    console.log("mainComponent")
  }

}
