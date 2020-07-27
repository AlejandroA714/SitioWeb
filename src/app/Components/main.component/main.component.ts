import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../../services/comunication.service';
import { Crypter } from '../../../services/crypter.service';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class mainComponent implements OnInit {

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  
  constructor( private COMUNICATION_SERVICE: ComunicationService ,public mediaObserver: MediaObserver ) { 
    mediaObserver.media$.subscribe((some )=>{
      console.log(some)
    });
  }

  ngOnInit(): void {
    this.COMUNICATION_SERVICE.loadWorkSpace.suscribe( (param) => {
      console.log(Crypter.getItem("WORKSPACE_ID"))
    })
  }

}
