import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef } from '@angular/core';
import { DevicesListComponent } from '../../ui.components/devices-list.component/devices-list.component';
import { DevicesFormComponent } from '../../ui.components/devices-form/devices-form.component';

@Component({
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  @ViewChild("DevicesContainer", { read: ViewContainerRef }) devicesContainer;
  ComponentRefList: ComponentRef<DevicesListComponent>

  constructor(private Resolver: ComponentFactoryResolver){}


  ngAfterViewInit(): void {
    this.add()
  }

  edit(){

  }

  add(){
    const ComponentFactory = this.Resolver.resolveComponentFactory(DevicesFormComponent)
    this.devicesContainer.clear()
    let elementRef = this.devicesContainer.createComponent(ComponentFactory)
    elementRef.instance.back.suscribe((evt) => {
      console.log("called back")
      this.list()
    })

  }

  list(){
    const ComponentFactory = this.Resolver.resolveComponentFactory(DevicesListComponent)
    this.devicesContainer.clear()
    let elementRef = this.devicesContainer.createComponent(ComponentFactory)
    elementRef.instance.addDevice.suscribe((evt) => {
      console.log("called add")
      this.add()
    })
  }

  
}
