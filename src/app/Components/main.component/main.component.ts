import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ComunicationService } from '../../../services/comunication.service';
import { DeviceComponent } from '../ui.components/device.component/device.component';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild("Container", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<DeviceComponent>;
  
  constructor( private COMUNICATION_SERVICE: ComunicationService, private RESOLVER: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.COMUNICATION_SERVICE.loadWorkSpace.suscribe( (param) => {
      //console.log(Crypter.getItem("WORKSPACE_ID"))
    })
  }

  createElement():void{
    const factory: ComponentFactory<DeviceComponent> = this.RESOLVER.resolveComponentFactory(DeviceComponent);

    this.componentRef = this.container.createComponent(factory);
    
    //this.componentRef.instance.type = type;

    //this.componentRef.instance.output.subscribe(event => console.log(event));

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
