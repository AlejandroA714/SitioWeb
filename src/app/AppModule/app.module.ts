import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from '../Modules/login.module/login.module';
import { mainModule } from '../Modules/main.module/main.module';
import { Crypter } from 'src/services/crypter.service';
import { CommonModule } from '@angular/common';
import { BREAKPOINT, FlexLayoutModule, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LoginModule,
    mainModule,
    AppRoutingModule
  ],
  providers: [Crypter,{provide:BREAKPOINT,useValue:DEFAULT_BREAKPOINTS,multi:true}],
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
