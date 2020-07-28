import { NgModule } from '@angular/core';
import { navbarComponent } from 'src/app/Components/ui.components/navbar.component/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../shared.module/shared.module';

@NgModule({
  declarations: [ navbarComponent ],
  imports: [
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ]
})

export class NavbarModule { }