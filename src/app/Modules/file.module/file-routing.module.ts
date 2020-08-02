import { NgModule } from '@angular/core';
import { LoadComponent } from '../../Components/file.components/load.component/load.component/load.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'src/services/auth-guard.service';
import { RoleGuardService as RoleGuard } from 'src/services/role-guard.service';

const routes: Routes = [

    { path: '', children:[
      {path:'', redirectTo:'load', pathMatch:'full'},
      {   path:'new', canActivate: [ AuthGuard ], component:LoadComponent},
      {  path:'load', canActivate: [ AuthGuard ], component:LoadComponent},
      {  path:'save', canActivate: [ AuthGuard ], component:LoadComponent},
      { path:'close', canActivate: [ AuthGuard ], component:LoadComponent},
      {path:'delete', canActivate: [ AuthGuard ], component:LoadComponent},
      {path:'logout', redirectTo:'/auth'}
    ]}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FileRoutingModule { }