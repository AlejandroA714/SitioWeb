import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './archivoWrapper.component.html',
  styleUrls: ['./archivoWrapper.component.css']
})
export class ArchivosWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("routed main")
  }

}
