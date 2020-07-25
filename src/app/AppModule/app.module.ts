import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginModule } from '../Modules/login.module/login.module';
import { mainModule } from '../Modules/main.module/main.module';
import { Crypter } from '../../services/crypter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    mainModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [Crypter],
  bootstrap: [AppComponent]
})
export class AppModule { }

declare global{
  interface String {
      format(...args: any[]) : string
  }
}   

String.prototype.format = function(...args: any[]) {
  let a:string;
  a = this;
  for (let k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}
