import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TreeSelectModule } from 'primeng/treeselect';

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule,
     MultiSelectModule,
      TreeSelectModule],
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss'
})
export class SelectBoxComponent implements ControlValueAccessor  {

  @Input() data: any[] = []; // Options for the select box
  @Input() mode: 'single' | 'multi' | 'tree' = 'single'; // Mode of the select box
  @Input() placeholder: string = 'Select a value'; // Placeholder text
  @Input() maxSelectedLabels: number = 0; // Max labels for multi-select


  @Output() selectionChange = new EventEmitter<any>();

  selectedValue: any; // For single select
  selectedValues: any[] = []; // For multi-select
  selectedTreeValue: any; // For tree select
  value:any
  // ControlValueAccessor methods
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional: Handle disable state if needed
  }
  ngOnChanges() {
    this.clearSelections();
  }

  clearSelections() {
    this.selectedValue = null;
    this.selectedValues = [];
    this.selectedTreeValue = null;
    this.selectionChange.emit(null); // Notify parent about cleared selection
  }

  onSelectionChange() {
    const selected =
      this.mode === 'single' ? this.selectedValue :
      this.mode === 'multi' ? this.selectedValues :
      this.selectedTreeValue;
      this.onChange(this.selectedValue);
      this.selectionChange.emit(this.selectedValue);
      this.onTouched();
  }

  

  checkMultiSelectLimit(event: any) {
    if (this.maxSelectedLabels && this.selectedValues.length > this.maxSelectedLabels) {
      this.selectedValues = this.selectedValues.slice(0, this.maxSelectedLabels);
    }
    this.selectionChange.emit(this.selectedValues);
  
  }
  ngModelChange(value: any) {
    this.selectionChange.emit(value);
  }
  
}
