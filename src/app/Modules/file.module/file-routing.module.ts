import { NgModule } from '@angular/core';
import { LoadComponent } from '../../Components/file.components/load.component/load.component/load.component';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardService as RoleGuard } from 'src/services/role-guard.service';

const routes: Routes = [

    { path: '', children:[
      {path:'', redirectTo:'load', pathMatch:'full'},
      {path:'new',component:LoadComponent},
      {path:'load', canActivate: [ RoleGuard ] , data: { expectedRole: "Administrador" }, component:LoadComponent},
      {path:'save',component:LoadComponent},
      {path:'close',component:LoadComponent},
      {path:'delete',component:LoadComponent},
      {path:'logout',component:LoadComponent}
    ]}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FileRoutingModule { }