import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ],
  imports: [
    SharedModule,
    CommonModule,
    SettingsRoutingModule,
  ]
})

export class SettingsModule {}
