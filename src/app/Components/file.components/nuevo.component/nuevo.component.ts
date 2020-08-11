import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef } from '@angular/core';
import { DevicesListComponent } from '../../ui.components/devices-list.component/devices-list.component';
import { DevicesFormComponent } from '../../ui.components/devices-form/devices-form.component';

@Component({
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  @ViewChild("DevicesContainer", { read: ViewContainerRef }) devicesContainer;
  ComponentRef: ComponentRef<DevicesListComponent>

  constructor(private Resolver: ComponentFactoryResolver){}


  ngAfterViewInit(): void {
    const ComponentFactory = this.Resolver.resolveComponentFactory(DevicesListComponent)
    console.log(this.devicesContainer);
    let elementRef = this.devicesContainer.createComponent(ComponentFactory)
    console.log(elementRef)
  }

  toogle(){
    const componentFactory = this.Resolver.resolveComponentFactory(DevicesFormComponent)
    this.devicesContainer.clear()
    let elementRef = this.devicesContainer.createComponent(componentFactory)

  }
  
}
