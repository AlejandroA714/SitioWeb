import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DevicesService } from 'src/services/devices.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';
import { ERROR } from 'src/models/error';
import { ComunicationService } from 'src/services/comunication.service';
import { Crypter } from 'src/services/crypter.service';
import { MediaObserver } from '@angular/flex-layout';
import { indexedDB } from 'src/services/indexedDB.service';
import { Workspace } from 'src/models/workspace';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent {

  constructor(private Devices_Service: DevicesService,private COMUNICATION_SERVICE: ComunicationService,
              public mediaObserver: MediaObserver,private indexedDB: indexedDB, public ROUTER: Router,public toastr: ToastrService ) { 
    mediaObserver.media$.subscribe((some )=>{
    });
  }

  ERROR:ERROR =  new ERROR();
  WORKSPACES_LIST$ = this.Devices_Service.obtenerProyectos().
                            pipe( catchError( (ERR) => {
                              this.ERROR.OCURRED = true;
                              this.ERROR.MESSAGE = "¡Error! Ha ocurrido un error :c"
                              this.ERROR.TYPE = "DANGER";
                              return throwError(ERR)
                            })) //an observable to suscribe with "async"

  btnAbrir_Click(id:string){
    if (confirm("¿Seguro que desea cargar este proyecto?")){
      Crypter.setItem("WORKSPACE_ID",id);
      this.Devices_Service.abrirProyecto(id).subscribe((reponse:Workspace) => {
        this.indexedDB.createWorkspace(reponse);
        this.COMUNICATION_SERVICE.workspace_updated.perfom(id); //Send message that project should be load
        this.ROUTER.navigateByUrl("/app/main");
      },() => this.toastr.error("Fallo al cargar el proyecto","¡Error!"))
      
    }
  }

}
