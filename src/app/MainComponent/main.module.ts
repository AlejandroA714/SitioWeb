import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DevicesComponent } from '../DevicesComponent/devices.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../NavbarComponent/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';


import {MatRippleModule} from '@angular/material/core';
import { ArchivosWrapperComponent } from '../ArchivosComponent/archivoWrapper.component';
@NgModule({
  declarations: [MainComponent, NavbarComponent, DevicesComponent, ArchivosWrapperComponent ],
  imports: [
    MainRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDividerModule
  ]
})
export class MainModule {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'favicon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/favicon.svg'));
  }
 }
