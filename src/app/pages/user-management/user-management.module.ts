import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddEditComponent } from './pages/user-add-edit/user-add-edit.component';
import { UserListComponent } from './pages/user-list/user-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserListComponent, UserAddEditComponent],
  exports: [UserListComponent]
})
export class UserManagementModule {}