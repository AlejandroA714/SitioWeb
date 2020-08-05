import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'src/services/auth-guard.service';
import { RoleGuardService as RoleGuard } from 'src/services/role-guard.service';
import { LoadComponent } from '../../Components/file.components/load.component/load.component';
import { NuevoComponent } from '../../Components/file.components/nuevo.component/nuevo.component';

const routes: Routes = [

    { path: '', children:[
      {path:'', redirectTo:'load', pathMatch:'full'},
      {   path:'new', component: NuevoComponent, canActivate: [ AuthGuard, RoleGuard ],  data:{expectedRole:"Administrador"}},
      {  path:'load', component: LoadComponent,  canActivate: [ AuthGuard ]},
      {  path:'save', component: LoadComponent,  canActivate: [ AuthGuard ]},
      { path:'close', component: LoadComponent,  canActivate: [ AuthGuard ]},
      {path:'delete', component: LoadComponent,  canActivate: [ AuthGuard ]},
      {path:'logout', redirectTo:'/auth'}
    ]}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FileRoutingModule { }