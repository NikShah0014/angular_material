import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { PaginationConfig } from '../../models';
import { FormsModule } from '@angular/forms';
const DEPENDENCIES = {
  MODULES: [PaginatorModule, DropdownModule ,FormsModule]
};

@Component({
  standalone: true,
  imports: [...DEPENDENCIES.MODULES],
  selector: 'app-server-pagination',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerPaginationComponent {
  @Input() paginationParams: PaginationConfig = new PaginationConfig();
  @Output() pageChanged: EventEmitter<PaginatorState> = new EventEmitter();

  onPageChanged($event: PaginatorState): void {
    console.log($event);
    if ($event.first !== undefined && $event.page !== undefined) {
      this.paginationParams.pageNumber = $event.page;
      this.paginationParams.first = $event.first;
      this.pageChanged.emit($event);
    }
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.paginationParams.itemsPerPage = itemsPerPage;
    this.pageChanged.emit({ page: 1 });
  }
}
