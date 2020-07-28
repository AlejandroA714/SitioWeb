import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { defaultComponent } from '../Components/ui.components/default.component/default.component';
import { AuthGuardService as AuthGuard } from 'src/services/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('../Modules/login.module/login.module').then(m => m.LoginModule ) },
    { path: 'app', loadChildren: () => import('../Modules/main.module/main.module').then(m => m.MainModule ), canLoad:[ AuthGuard ] },
    { path: '**', component: defaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
