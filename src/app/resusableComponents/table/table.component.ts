import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() columnData:any[]=[];
  @Input() tableData:any[]=[];

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  onEdit(item:any){
    this.edit.emit(item);
  }

  onDelete(item:any){
    this.delete.emit(item);
  }
}
