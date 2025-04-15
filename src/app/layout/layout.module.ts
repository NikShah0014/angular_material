import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizedLayoutComponent } from './authorized-layout/authorized-layout.component';
import { UnauthorizedLayoutComponent } from './unauthorized-layout/unauthorized-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthorizedLayoutComponent,
    UnauthorizedLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
