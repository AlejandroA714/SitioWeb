import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../../../../services/devices.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs';
import { ERROR } from 'src/models/error';

@Component({
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class loadComponent implements OnInit {

  constructor(private DEVICES_SERVICE: DevicesService) { }

  ERROR:ERROR =  new ERROR();
  WORKSPACES_LIST_OBSERVABLE = this.DEVICES_SERVICE.obtenerProyectos().
                            pipe( catchError( (ERR) => {
                              this.ERROR.OCURRED = true;
                              this.ERROR.MESSAGE = "¡Error! Ha ocurrido un error :c"
                              this.ERROR.TYPE = "DANGER";
                              return throwError(ERR)
                            })) //an observable to suscribe with "async"

  ngOnInit(): void {

  }

}
