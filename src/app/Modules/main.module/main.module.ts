import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { DomSanitizer  } from '@angular/platform-browser';
import { BREAKPOINT } from '@angular/flex-layout'
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseService } from 'src/services/route-reuse.service';
import { fxFlexSD } from 'src/directives/fxFlex.directive';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { RoleGuardService } from 'src/services/role-guard.service';
import { NavbarModule } from '../navbar.module/navbar.module';
import { SharedModule } from '../shared.module/shared.module';
import { MatIconRegistry } from '@angular/material/icon';
import { MainComponent } from 'src/app/Components/main.component/main.component';
import { DeviceComponent } from 'src/app/Components/ui.components/device.component/device.component';
import { CdkScrollableModule } from '@angular/cdk/scrolling';

const CUSTOM_BREAKPOINT = [
  {
    alias: 'sd',
    suffix: 'Sd',
    mediaQuery: 'screen and (min-width: 600px) and (max-width:719px)',
    priority:1000
  },
  {
    alias:'sm',
    suffix:'Sm',
    mediaQuery: 'screen and (min-width:720px) and (max-width:959px)',
    priority:1000
  }] 

@NgModule({
  declarations: [ fxFlexSD, MainComponent, DeviceComponent ],
  imports: [
    SharedModule,
    MainRoutingModule,
    NavbarModule,
    CdkScrollableModule
  ],
  providers:[{provide:RouteReuseStrategy,useClass:RouteReuseService},{provide:BREAKPOINT,useValue:CUSTOM_BREAKPOINT,multi:true},AuthGuardService,RoleGuardService]
})
export class MainModule {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'favicon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/favicon.svg'));
    }
  }
