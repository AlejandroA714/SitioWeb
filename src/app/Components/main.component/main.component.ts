import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../../services/comunication.service';
import { Crypter } from '../../../services/crypter.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class mainComponent implements OnInit {

  constructor(private COMUNICATION_SERVICE: ComunicationService,private CRYPTER: Crypter) { }

  ngOnInit(): void {
    this.COMUNICATION_SERVICE.loadWorkSpace.suscribe( (param) => {
      console.log(this.CRYPTER.getItem("WORKSPACE_ID"))
    })
  }

}
