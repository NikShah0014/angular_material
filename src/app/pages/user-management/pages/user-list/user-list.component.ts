import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/component/basecomponent/base.component';


@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent extends BaseComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
