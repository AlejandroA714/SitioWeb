import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  declarations: [ ],
  imports: [
    SharedModule,
    CommonModule,
    ReportsRoutingModule,
  ]
})

export class ReportsModule { }
