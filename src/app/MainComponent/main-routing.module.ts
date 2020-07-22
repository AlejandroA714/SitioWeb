import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DevicesComponent } from '../DevicesComponent/devices.component';
import { ArchivosWrapperComponent } from '../ArchivosComponent/archivoWrapper.component';

const routes: Routes = [
    { path: 'app', component: MainComponent, children: [
        {path: '', redirectTo: 'main', pathMatch: 'full'},
        {path:'main',component: DevicesComponent},
        {path:'file',component: ArchivosWrapperComponent},
        {path:'settings',component: DevicesComponent},
        {path:'reports',component: DevicesComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
