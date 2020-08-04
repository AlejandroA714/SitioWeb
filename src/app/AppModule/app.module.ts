import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Crypter } from 'src/services/crypter.service';
import { BREAKPOINT, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { unathorizedComponent } from 'src/app/Components/ui.components/unathorized.component/unathorized.component';
import { SharedModule } from '../Modules/shared.module/shared.module';
import { TimerService } from 'src/services/timer.service';
import { isNullOrUndefined } from 'util';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { DBSchema } from 'idb';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter:(() => !isNullOrUndefined(Crypter.getItem("SESSION")) ? Crypter.getItem("SESSION")["access_token"] : undefined ) ,
      allowedDomains : ["localhost","127.0.0.1:8080","apiscada.herokuapp.com"],
      headerName: "Authorization",
      authScheme: "Bearer ",
      throwNoTokenError:false
  }
};

/*  const dbConfig: DBConfig  = {
  name: 'scada_db',
  version: 1,
  objectStoresMeta: [
    {
    store: 'Drivers',
    storeConfig: { keyPath: 'id', autoIncrement: true},
    storeSchema: [
      { name: 'UnicID', keypath: 'Id', options: { unique: true } },
      { name: 'Nombre', keypath: 'Id', options: { unique: false }},
      { name: 'IsEmpty', keypath: 'DriversCount', options: { unique: false }},
      { name: 'Time', keypath: 'Nombre', options: { unique: false }},
      { name: 'X', keypath: 'Nombre', options: { unique: false }},
      { name: 'Y', keypath: 'Nombre', options: { unique: false }},
      { name: 'ID', keypath: 'Nombre', options: { unique: false }},
      { name: 'Token', keypath: 'Nombre', options: { unique: false }},
      { name: 'Image', keypath: 'Nombre', options: { unique: false }},
      { name: 'Variables', keypath: 'Nombre', options: { unique: false }},
      { name: 'LastUpdate', keypath: 'Nombre', options: { unique: false }},
    ]
  },
  {
  store: 'Info',
    storeConfig: { keyPath: 'id', autoIncrement: true},
    storeSchema: [
      { name: 'UnicID', keypath: 'Id', options: { unique: true } },
      { name: 'Nombre', keypath: 'Id', options: { unique: false }},
      { name: 'IsEmpty', keypath: 'DriversCount', options: { unique: false }},
      { name: 'Time', keypath: 'Nombre', options: { unique: false }},
      { name: 'X', keypath: 'Nombre', options: { unique: false }},
      { name: 'Y', keypath: 'Nombre', options: { unique: false }},
      { name: 'ID', keypath: 'Nombre', options: { unique: false }},
      { name: 'Token', keypath: 'Nombre', options: { unique: false }},
      { name: 'Image', keypath: 'Nombre', options: { unique: false }},
      { name: 'Variables', keypath: 'Nombre', options: { unique: false }},
      { name: 'LastUpdate', keypath: 'Nombre', options: { unique: false }},
    ]
}]
}; */

export function tokenGetter(){
  return Crypter.getItem("SESSION") != null ? Crypter.getItem("SESSION")["access_token"] : null
}
 
@NgModule({
  declarations: [
    AppComponent, unathorizedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    JwtModule.forRoot(JWT_Module_Options),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    AppRoutingModule
  ],
  providers: [{provide:BREAKPOINT,useValue:DEFAULT_BREAKPOINTS,multi:true}, TimerService, Crypter ],
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
