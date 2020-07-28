import { NgModule } from '@angular/core';
import { LoadComponent } from '../../Components/file.components/load.component/load.component/load.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    { path: '', component:LoadComponent}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SettingsRoutingModule { }