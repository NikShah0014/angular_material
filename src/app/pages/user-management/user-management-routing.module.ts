import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserAddEditComponent } from './pages/user-add-edit/user-add-edit.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: UserAddEditComponent },
  { path: 'edit/:id', component: UserAddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {}