import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './MainComponent/main.module';
import { LoginModule } from './LoginComponent/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    MainModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
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
