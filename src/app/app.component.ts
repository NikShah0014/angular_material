import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from './shared/component/basecomponent/base.component';
import { MenuConfig } from './shared/constants/menu-config.constants';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent extends BaseComponent implements OnInit{
 
  
  menuItems = MenuConfig;
  userFormGroup!: FormGroup
  ngOnInit(): void {
   
  
  }
  title = 'angular_material';

  selectedValues: any[] = [];
   ELEMENT_DATA: PeriodicElement[] = [
   
    
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},

  ];
  displayedColumns = [
    { field: 'position', header: 'Position' },
    { field: 'name', header: 'Name' },
    { field: 'weight', header: 'Weight' },
    { field: 'symbol', header: 'Symbol' }
  ];
  dataSource = this.ELEMENT_DATA;

  handleRowSelect(event: any) {
    console.log('Row selected:', event);
  }

  handleRowUnselect(event: any) {
    console.log('Row unselected:', event);
  }
  onPageChanged(): void {
    
  }
  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
    { label: 'Option 5', value: '5' },
    { label: 'Option 6', value: '6' },
  ];


  treeOptions = [
    {
      label: 'Node 1',
      children: [
        { label: 'Child 1', data: 'child1' },
        { label: 'Child 2', data: 'child2' },
      ],
    },
    {
      label: 'Node 2',
      data: 'node2',
    },
  ];
  
  onSelectionChange(event: any) {
    console.log('Selected:', event);
    console.log('value',this.userFormGroup.value)
  }
}
