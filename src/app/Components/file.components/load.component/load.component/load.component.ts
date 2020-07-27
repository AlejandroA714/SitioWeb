import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DevicesService } from 'src/services/devices.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';
import { ERROR } from 'src/models/error';
import { ComunicationService } from 'src/services/comunication.service';
import { Crypter } from 'src/services/crypter.service';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class loadComponent implements OnInit {

  constructor(private DEVICES_SERVICE: DevicesService,private COMUNICATION_SERVICE: ComunicationService,private CRYPTER: Crypter,public mediaObserver: MediaObserver ) { 
    mediaObserver.media$.subscribe((some )=>{
      console.log(some)
    });
  }

  ERROR:ERROR =  new ERROR();
  WORKSPACES_LIST_OBSERVABLE = this.DEVICES_SERVICE.obtenerProyectos().
                            pipe( catchError( (ERR) => {
                              this.ERROR.OCURRED = true;
                              this.ERROR.MESSAGE = "¡Error! Ha ocurrido un error :c"
                              this.ERROR.TYPE = "DANGER";
                              return throwError(ERR)
                            })) //an observable to suscribe with "async"

  ngOnInit(){}

  btnAbrir_Click(id:string){
    if (confirm("¿Seguro que desea cargar este proyecto?")){
      this.CRYPTER.setItem("WORKSPACE_ID",id)
      this.COMUNICATION_SERVICE.loadWorkSpace.perfom(id); //Send message that project should be load
    }
  }

}
