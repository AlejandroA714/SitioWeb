import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { LoadComponent } from 'src/app/Components/file.components/load.component/load.component/load.component';
import { FileRoutingModule } from './file-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ LoadComponent ],
  imports: [
    SharedModule,
    CommonModule,
    FileRoutingModule,
    MatCardModule
  ]
})

export class FileModule { }
