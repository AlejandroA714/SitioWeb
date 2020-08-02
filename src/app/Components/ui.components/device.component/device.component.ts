import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TimerService } from 'src/services/timer.service';
import { Dispositivo } from 'src/models/workspace';
import { Variable } from 'src/models/workspace';
import { DevicesService } from 'src/services/devices.service';
import { Response } from 'src/models/response';

@Component({
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})

export class DeviceComponent implements OnInit {

  @ViewChildren('output') outputs:QueryList<any>
  RGBColor = require('rgbcolor'); 
  DEVICE:Dispositivo = new Dispositivo();
  CURRENT_STATE:number = 0|1|2|3; // 0:Died, 1: Waiting for update, 2: Updating
  CONEXION_STATE:number = 0|1|2|3; // 0: unknow, 1: Conected,  2: Disconnect, 3 :No conexion
  IMAGE_PATH; 
  VariablesLectura:Variable[];
  VariablesEscritura:Variable[];
  UPDATE_TIME:number;
  constructor(private TIMER: TimerService,private DomSanitizer: DomSanitizer, private devices_Service: DevicesService) { }

  ngOnInit(): void {
    this.CURRENT_STATE = 0;
    this.CONEXION_STATE= 0;
    this.UPDATE_TIME = this.DEVICE.Time;
    this.IMAGE_PATH = this.DEVICE.Image == null ? "assets/images/NoImage.png" : this.DomSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,{0}'.format(this.DEVICE.Image))
    this.VariablesLectura = this.DEVICE.Variables.filter((v:Variable) => !v.IsOutput)
    this.VariablesEscritura = this.DEVICE.Variables.filter((v:Variable) => v.IsOutput)
    
    if(this.VariablesLectura.length > 0){
      this.CURRENT_STATE = 1;
      this.TIMER.suscribe(()=>{
        if (this.CURRENT_STATE == 1){this.UPDATE_TIME--;}
        if(this.UPDATE_TIME == 0){
          this.CURRENT_STATE = 2;
          this.actualizarVariables()
        }
      })
    }
  }//OnInit

  private actualizarVariables(){
    this.devices_Service.leerSensor(this.DEVICE.ID,this.DEVICE.Token,this.VariablesLectura).subscribe( (response:Variable[]) => {
      if(response.length == 0){ this.CONEXION_STATE = 2; return;}
      this.UPDATE_TIME = this.DEVICE.Time;
      this.CONEXION_STATE =1;
      this.VariablesLectura.map( (v) => {
          v.Valor = response.find( variable => variable.UnicID.toString() == v.UnicID.toString()).Valor
        });
    },()=>this.CONEXION_STATE = 3).add(()=> this.CURRENT_STATE = 1);
  }

  actualizarVariable(v:Variable){
    this.outputs.forEach((element) => {
      element.nativeElement.disabled =true;
    })
    this.CURRENT_STATE = 2; // Updating
    this.devices_Service.actualizarSensor(this.DEVICE.ID,this.DEVICE.Token,v).subscribe( (response:Response) => {
      this.outputs.forEach((element) => {
        element.nativeElement.disabled =false;
      })
      if(response.Success){this.CONEXION_STATE=1}else{this.CONEXION_STATE=2}
    },()=>this.CONEXION_STATE=3).add(()=> this.VariablesLectura.length > 0 ? this.CURRENT_STATE = 1:this.CURRENT_STATE = 0);
  }

}
