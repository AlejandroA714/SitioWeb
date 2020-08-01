import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TimerService } from 'src/services/timer.service';
import { Dispositivo } from 'src/models/workspace';
import { Variable } from 'src/models/workspace';
import { DevicesService } from '../../../../services/devices.service';

@Component({
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {

  DEVICE:Dispositivo = new Dispositivo();
  CURRENT_STATE:number = 0|1|2|3; // 0:Died, 1: Waiting for update, 2: Updating
  IMAGE_PATH; 
  VariablesLectura:Variable[];
  VariablesEscritura:Variable[];
  UPDATE_TIME:number;
  constructor(private TIMER: TimerService,private DomSanitizer: DomSanitizer, private devices_Service: DevicesService) { }

  ngOnInit(): void {
    this.CURRENT_STATE = 0;
    this.UPDATE_TIME = this.DEVICE.Time;
    this.IMAGE_PATH = this.DEVICE.Image == null ? "assets/images/NoImage.png" : this.DomSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,{0}'.format(this.DEVICE.Image))
    this.VariablesLectura = this.DEVICE.Variables.filter((v:Variable) => !v.IsOutput)
    this.VariablesEscritura = this.DEVICE.Variables.filter((v:Variable) => v.IsOutput)
    
    //this.VariablesLectura[0].Nombre  = "editado"

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
    this.devices_Service.LeerSensor(this.DEVICE.ID,this.DEVICE.Token,this.VariablesLectura).subscribe( (response) => {
      console.log(response)
      this.UPDATE_TIME = this.DEVICE.Time;
      this.CURRENT_STATE = 1;

    });
  }

}
