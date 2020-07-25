import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { navbarComponent } from '../../Components/ui.components/navbar.component/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { loadComponent } from 'src/app/Components/file.components/load.component/load.component/load.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseService } from '../../../services/route-reuse.service';

@NgModule({
  declarations: [ navbarComponent, loadComponent ],
  imports: [
    MainRoutingModule,
    NgbModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],providers:[{provide:RouteReuseStrategy,useClass:RouteReuseService}]
})
export class mainModule {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'favicon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/favicon.svg'));
    }
  }
