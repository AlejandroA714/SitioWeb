import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './NotFoundComponent/NotFoundComponent';

const routes: Routes = [
    { path: '', redirectTo: 'auth' , pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
