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
import { DevicesListComponent } from 'src/app/Components/ui.components/devices-list.component/devices-list.component';
import { DevicesFormComponent } from 'src/app/Components/ui.components/devices-form/devices-form.component';

@NgModule({
  declarations: [ LoadComponent, NuevoComponent, DevicesListComponent, DevicesFormComponent ],
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
