import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainComponent } from '../../Components/main.component/main.component';
import { loadComponent } from '../../Components/file.components/load.component/load.component/load.component';
import { navbarComponent } from '../../Components/ui.components/navbar.component/navbar.component';
import { AuthGuardService as AuthGuard } from 'src/services/auth-guard.service';
import { RoleGuardService as RoleGuard } from '../../../services/role-guard.service';
import { unathorizedComponent } from '../../Components/ui.components/unathorized.component/unathorized.component';

const routes: Routes = [
    { path: 'app', component: navbarComponent , canActivate : [AuthGuard] , children: [

        {path: '', redirectTo: 'main', pathMatch: 'full'},
        {path:'main',component: mainComponent, data:{ reuse:true }},

        {path:'file', children:[
          {path:'', redirectTo:'load', pathMatch:'full'},
          {path:'new',component:loadComponent},
          {path:'load', canActivate:[RoleGuard], data: { expectedRole: "Administrador" }, component:loadComponent},
          {path:'save',component:loadComponent},
          {path:'close',component:loadComponent},
          {path:'delete',component:loadComponent},
          {path:'logout',component:loadComponent}
        ]},

        {path:'settings',component: mainComponent},

        {path:'reports',component:  mainComponent},

        {path: 'unathorized',component:unathorizedComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
