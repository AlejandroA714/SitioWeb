import { Component, OnInit, ViewChild } from '@angular/core';
import { Workspace } from 'src/models/workspace';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Dispositivo } from 'src/models/workspace';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  menu:any;
}

@Component({
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {


  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',menu:''},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',menu:''},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',menu:''},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',menu:''},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',menu:''},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',menu:''},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',menu:''},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',menu:''},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',menu:''},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',menu:''},
  ];
  workspace:Workspace = new Workspace();
  constructor() { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','time','menu'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA)

  ngOnInit(): void {
    console.log(this.workspace)
    this.dataSource.paginator = this.paginator;
  }

}
