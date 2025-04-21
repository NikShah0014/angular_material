import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_PATHS } from './shared/constants/router.constants';

const routes: Routes = [
  {
    path: ROUTER_PATHS.users.root,
    loadChildren: async () => (await import('./pages/user-management/user-management.module')).UserManagementModule
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
