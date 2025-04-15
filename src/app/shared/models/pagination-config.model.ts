export class PaginationConfig {
    totalElements = 0;
    numberOfElements = 0;
    first = 0;
    maxSize = 8;
    predicate = 'id';
    ascending = true;
    pageNumber = 0;
    itemsPerPage = 10;
    itemsPerPageOptions: { label: number; value: number }[] = [
      { label: 10, value: 10 },
      { label: 25, value: 25 },
      { label: 50, value: 50 },
      { label: 100, value: 100 }
    ];
  }