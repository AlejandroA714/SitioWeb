import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { ComunicationService } from 'src/services/comunication.service';
import { DeviceComponent } from '../ui.components/device.component/device.component';
import { Crypter } from 'src/services/crypter.service';
import { isNullOrUndefined } from 'util';
import { ERROR } from 'src/models/error';
import { indexedDB } from 'src/services/indexedDB.service';
import { Workspace } from 'src/models/workspace';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  ERROR = new ERROR();
  @ViewChild("Container", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<DeviceComponent>;
  
  constructor(private COMUNICATION_SERVICE: ComunicationService, private RESOLVER: ComponentFactoryResolver, 
              private INDEXdb: indexedDB, private ComunicationService : ComunicationService) {
                this.ComunicationService.toogle_sidebar.perfom(false);
              }
      
    async ngAfterViewInit() {
      this.COMUNICATION_SERVICE.workspace_updated.suscribe( () => {
        this.createElements();
      })
      
      if(!isNullOrUndefined(await this.INDEXdb.existsWorkSpace())){ //if workSpace exits
        this.createElements()
      }  
  }

  createElements = async () => {

    const ComponentFactory = this.RESOLVER.resolveComponentFactory(DeviceComponent);
    if(Crypter.DECRYPT(await this.INDEXdb.getWorkspace()) == null ){ this.ERROR.OCURRED = true;return;}
    const workSpace = new Workspace(JSON.parse(Crypter.DECRYPT(await this.INDEXdb.getWorkspace())))
    workSpace.Drivers.forEach( d => {
      
      let componentRef = this.container.createComponent(ComponentFactory);
      componentRef.instance.DEVICE = d;
    });

    //this.appRef.attachView(componentRef.hostView); //attach to angular component tree



  }

  ERROR_CALLBACK = (error) => {
    console.log(error)
    this.ERROR.OCURRED = true;
    this.ERROR.MESSAGE = "Fallo al contactar al servicio SCADA"
    this.ERROR.TYPE = "DANGER";
  }

  FINISHED_CALLBACK = () => {
      //this.PERFORMING_TRANSACTION = false;
      //this.CHANGE_DETECTOR.detectChanges()
  }

}
