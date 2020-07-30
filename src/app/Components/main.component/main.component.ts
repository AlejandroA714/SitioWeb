import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { ComunicationService } from 'src/services/comunication.service';
import { DeviceComponent } from '../ui.components/device.component/device.component';
import { TimerService } from 'src/services/timer.service';
import { Crypter } from 'src/services/crypter.service';
import { isUndefined, isNullOrUndefined } from 'util';
import { ERROR } from 'src/models/error';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TimerService]
})
export class MainComponent {

  ERROR = new ERROR();
  @ViewChild("Container", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<DeviceComponent>;
  
  constructor( private COMUNICATION_SERVICE: ComunicationService, private RESOLVER: ComponentFactoryResolver, private appRef: ApplicationRef ) {}

  ngAfterViewInit(): void {
    this.COMUNICATION_SERVICE.loadWorkSpace.suscribe( (param) => {
      this.loadWorkSpace(param);
    })
    this.loadWorkSpace()
  }

  loadWorkSpace(id?: string):void{
    if(isUndefined(id) && !isNullOrUndefined(Crypter.getItem("WORKSPACE_ID"))){
      id = Crypter.getItem("WORKSPACE_ID")
    }else if (isNullOrUndefined(id)){ console.log("[INFO] WORKPSACE_ID NOT EXITS "); return; }
    this.container.clear()
}


  createElement():void{
    
    const ComponentFactory = this.RESOLVER.resolveComponentFactory(DeviceComponent)

    let componentRef = this.container.createComponent(ComponentFactory);

    this.appRef.attachView(componentRef.hostView); //attach to angular component tree

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
/*  */

/* @Component({
  selector: 'my-app',
  template: `
    <template #alertContainer></template>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  `,
})
export class App {
 @ViewChild("alertContainer", { read: ViewContainerRef }) container;
 componentRef: ComponentRef;
 
  constructor(private resolver: ComponentFactoryResolver) {}
  
  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);
    
    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => console.log(event));

  }
  
    ngOnDestroy() {
      this.componentRef.destroy();    
    } */
