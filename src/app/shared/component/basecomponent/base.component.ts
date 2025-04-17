import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaginationConfig } from '../../models';
import { ROUTER_PATHS } from '../../constants/router.constants';


@Component({
  selector: 'app-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent {
  paginationConfig: PaginationConfig = new PaginationConfig();
  path = ROUTER_PATHS;
}
