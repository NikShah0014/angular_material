export interface Page<T> {
    content: T[];
    first: boolean;
    last: boolean;
    totalElements: number;
    numberOfElements: number;
    totalPages: number;
    sort: Sort;
    size: number;
    number: number;
  }
  
  export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  }