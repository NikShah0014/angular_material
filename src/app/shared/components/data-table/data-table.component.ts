import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-data-table',
  standalone : true,
  imports:[TableModule,CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() columns: { field: string; header: string }[] = []; // Column definitions
  @Input() data: any[] = []; // Data to display
  @Input() paginator: boolean = true; // Enable/disable pagination
  @Input() rows: number = 10; // Number of rows per page
  @Input() loading: boolean = false; // Loading state
  @Input() sortField: string = ''; // Default sort field
  @Input() sortOrder: number = 1; // Default sort order (1 = asc, -1 = desc)

  @Output() rowSelect: EventEmitter<any> = new EventEmitter(); // Emit when a row is selected
  @Output() rowUnselect: EventEmitter<any> = new EventEmitter(); // Emit when a row is unselected
  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter(); // Emit for lazy loading

  constructor() {}

  ngOnInit(): void {}
}
