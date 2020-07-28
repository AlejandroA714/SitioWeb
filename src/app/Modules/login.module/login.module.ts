import { NgModule } from '@angular/core';
import { loginComponent } from '../../Components/login.component/login.component';
import { SharedModule } from '../shared.module/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [loginComponent],
  imports: [
    SharedModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
