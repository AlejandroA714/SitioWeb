import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { navbarComponent } from '../../Components/ui.components/navbar.component/navbar.component';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { loadComponent } from 'src/app/Components/file.components/load.component/load.component/load.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseService } from 'src/services/route-reuse.service';
import { mainComponent } from 'src/app/Components/main.component/main.component';
import { fxFlexSD } from '../../../directives/fxFlex.directive';

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
  declarations: [ navbarComponent, loadComponent, mainComponent, fxFlexSD ],
  imports: [
    FlexLayoutModule,
    MainRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],providers:[{provide:RouteReuseStrategy,useClass:RouteReuseService},{provide:BREAKPOINT,useValue:CUSTOM_BREAKPOINT,multi:true}]
})
export class mainModule {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'favicon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/favicon.svg'));
    }
  }
