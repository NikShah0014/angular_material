import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileComponent
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {}