import { Component } from '@angular/core';
import { BaseComponent } from 'primeng/basecomponent';

@Component({
  selector: 'app-authorized-layout',
  standalone: false,
  templateUrl: './authorized-layout.component.html',
  styleUrl: './authorized-layout.component.scss'
})
export class AuthorizedLayoutComponent extends BaseComponent {
  constructor() {
    super();
  }
}
