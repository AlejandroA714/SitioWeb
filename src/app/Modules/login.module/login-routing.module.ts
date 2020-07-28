import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from 'src/app/Components/login.component/login.component';

const routes: Routes = [
    {path : ':error', component: loginComponent },
    {path : '', component: loginComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
