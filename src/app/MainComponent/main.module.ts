import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DevicesComponent } from '../DevicesComponent/devices.component';
import { NavbarComponent } from '../NavbarComponent/navbar.component';

@NgModule({
  declarations: [MainComponent, NavbarComponent, DevicesComponent ],
  imports: [
    MainRoutingModule,
    CommonModule
  ]
})
export class MainModule { }
