//Utils
import { NgModule } from '@angular/core';
import { LoginModule } from './LoginComponent/login.module';
import { MainRoutingModule } from './main-routing.module';
import { NotFoundComponent } from './NotFoundComponent/NotFoundComponent';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './AppComponent/app.module';
import { MainComponent } from './main.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [ NotFoundComponent, MainComponent ],
  imports: [
    LoginModule,
    AppModule,
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [ MainComponent ]
})
export class MainModule { }

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