/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { principalComponent } from '../main.module/principal.component';
import { mainComponent } from 'src/app/Components/main.component/main.component';
import { loadComponent } from 'src/app/Components/file.components/load.component/load.component';


const routes: Routes = [
    { path: 'app', component: principalComponent, children: [
        {path: '', redirectTo: 'main', pathMatch: 'full'},
        {path:'main',component: mainComponent, pathMatch:'full'},
    
        {path:'settings',component: mainComponent},
        {path:'reports',component:  mainComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
 */