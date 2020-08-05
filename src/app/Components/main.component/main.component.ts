import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { ComunicationService } from 'src/services/comunication.service';
import { DeviceComponent } from '../ui.components/device.component/device.component';
import { Crypter } from 'src/services/crypter.service';
import { isNullOrUndefined } from 'util';
import { ERROR } from 'src/models/error';
import { indexedDB } from 'src/services/indexedDB.service';
import { Workspace } from 'src/models/workspace';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DevicesService } from 'src/services/devices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent{

  ERROR = new ERROR();
  @ViewChild("Container", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<DeviceComponent>;
  
  constructor(private COMUNICATION_SERVICE: ComunicationService, private RESOLVER: ComponentFactoryResolver, 
              private indexedDB: indexedDB,private Router: Router, private Devices_Service: DevicesService, public toastr: ToastrService) 
    {
      this.Router.events.pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if ( event.id === 1 && event.url === event.urlAfterRedirects ) { //On reload recharge project
          if (  Crypter.getItem("WORKSPACE_ID") != null ){
            this.Devices_Service.abrirProyecto(Crypter.getItem("WORKSPACE_ID")).subscribe((response:Workspace) => {
              this.indexedDB.createWorkspace(response);
              //this.createElements()
            },() =>  this.toastr.error("<strong>Fallo al recargar el proyecto<br>Los cambios podrian no reflejarse</strong>","¡Error!",{enableHtml:true}))
          }
        }
      })

    }//constructor
    
    async ngAfterViewInit() {

      this.COMUNICATION_SERVICE.workspace_updated.suscribe( () => {
        this.createElements();
      })
      
      if(!isNullOrUndefined(await this.indexedDB.existsWorkSpace())){ //if workSpace exits
        this.createElements()
      }  

  }

  createElements = async () => {

    const ComponentFactory = this.RESOLVER.resolveComponentFactory(DeviceComponent);

    if(await this.indexedDB.getWorkspace() == null ){ this.ERROR.OCURRED = true; return;}
    
    const workSpace = new Workspace(await this.indexedDB.getWorkspace())
    
    workSpace.Drivers.forEach( d => {
      let componentRef = this.container.createComponent(ComponentFactory);
      componentRef.instance.DEVICE = d;
    });
  }

  ERROR_CALLBACK = () => {
    this.ERROR.OCURRED = true;
    this.ERROR.MESSAGE = "Fallo al contactar al servicio SCADA"
    this.ERROR.TYPE = "DANGER";
  }

  /* FINISHED_CALLBACK = () => {
      this.PERFORMING_TRANSACTION = false;
      this.CHANGE_DETECTOR.detectChanges()
  } */

}
