import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInput, MatInputModule } from '@angular/material/input';
import { SfInputComponent } from './sf-input/sf-input.component';

@NgModule({
  declarations: [
    SfInputComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  
  ]
})
export class ControllersModule {}
