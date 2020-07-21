import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("routed main")
  }

}
