import { Component, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { DataTableColumn } from '../../models/data-table-column';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges {

  @Input('dataSource') items : any[] = [];
  displayedColumns : string[] = [];
  error : boolean = false;
  @Input() columns : DataTableColumn[] = [];  
  @Output() onItemSelected : EventEmitter<any> = new EventEmitter();

  selectItem(item: any) {
    console.log("Selected item", item);
    this.onItemSelected.emit(item);
  }

ngOnChanges(changes: SimpleChanges): void {     
  if(changes['columns']) {
    // this.displayedColumns = [];
    // this.columns.forEach((col:DataTableColumn) => {
    //   this.displayedColumns.push(col.propertyName);
    // });

    this.displayedColumns = this.columns.map ((col:DataTableColumn) => {
      return col.propertyName;
    })

    this.displayedColumns.push("actions");
  };  
}

constructor() {
  console.log("Columnas ",this.columns);
}

}
