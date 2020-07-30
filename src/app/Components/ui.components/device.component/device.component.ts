import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/services/timer.service';

@Component({
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  TIME =240;
  constructor(private TIMER: TimerService) { }

  ngOnInit(): void {
    this.TIMER.suscribe(()=>{
      this.TIME--;
    })
  }

}
