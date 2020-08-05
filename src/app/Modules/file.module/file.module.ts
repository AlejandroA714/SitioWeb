import { NgModule, ɵConsole } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { LoadComponent } from 'src/app/Components/file.components/load.component/load.component';
import { FileRoutingModule } from './file-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NuevoComponent } from 'src/app/Components/file.components/nuevo.component/nuevo.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [ LoadComponent, NuevoComponent ],
  imports: [
    SharedModule,
    CommonModule,
    FileRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule
    
  ]
})

export class FileModule {}
