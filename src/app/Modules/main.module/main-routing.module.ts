import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../../Components/main.component/main.component';
import { navbarComponent } from '../../Components/ui.components/navbar.component/navbar.component';
import { AuthGuardService as AuthGuard } from 'src/services/auth-guard.service';
import { unathorizedComponent } from '../../Components/ui.components/unathorized.component/unathorized.component';

const routes: Routes = [

    { path: '', component: navbarComponent, children: [

        {path: '', redirectTo:'main'},

        {path: 'main',  component:MainComponent , data:{ reuse:true }},

        {path: 'file',     loadChildren: () => import('../file.module/file.module').then(m => m.FileModule ), canLoad:[ AuthGuard ]},

        {path: 'settings', loadChildren: () => import('../settings.module/settings.module').then(m => m.SettingsModule ), canLoad:[ AuthGuard ]},

        {path: 'reports',  loadChildren: () => import('../reports.module/reports.module').then(m => m.ReportsModule), canLoad:[ AuthGuard ]},

        {path: 'unathorized',component:unathorizedComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }