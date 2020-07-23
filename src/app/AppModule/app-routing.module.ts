import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { defaultComponent } from '../Components/ui.components/default.component/default.component';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', component: defaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
