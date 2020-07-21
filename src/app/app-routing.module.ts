import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './LoginComponent/login.component';
import { MainComponent } from './MainComponent/main.component';
import { DevicesComponent } from './DevicesComponent/devices.component';
import { NotFoundComponent } from './NotFoundComponent/NotFoundComponent';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
