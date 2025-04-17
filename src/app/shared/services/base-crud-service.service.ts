import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../models';

@Injectable({ providedIn: 'root' })
export abstract class BaseCrudService {
  private readonly APIUrl = this.getBaseAPIPath();

  constructor(protected readonly httpClient: HttpClient) {}

  abstract getBaseAPIPath(): string;

  getFullAPIUrl(endpoint?: string): string {
    if (endpoint) {
      return `${this.APIUrl}/${endpoint}`;
    }
    return this.APIUrl;
  }

  toServerModel(entity: any): any {
    return entity;
  }

  fromServerModel(json: any): any {
    return json;
  }

  getList<ReturnType>(endpoint?: string): Observable<ReturnType[]> {
    return this.httpClient
      .get<ReturnType[]>(`${this.getFullAPIUrl(endpoint)}`)
      .pipe(map((list) => list.map((item) => this.fromServerModel(item))));
  }

  getListWithPagination<ReturnType>(page: number, size: number, endpoint?: string): Observable<Page<ReturnType>> {
    const params = new HttpParams().set('pageNumber', page.toString()).set('pageSize', size.toString());

    return this.httpClient
      .get<ReturnType>(`${this.getFullAPIUrl(endpoint)}?${params.toString()}`)
      .pipe(map((item) => this.fromServerModel(item)));
  }

  getListWithFiltersWithPagination<FilterParam, ReturnType>(
    filter: FilterParam,
    page: number,
    size: number,
    endpoint?: string,
    orderBy?: string,
    orderField?: string
  ): Observable<Page<ReturnType>> {
    const params = new HttpParams().set('page', (page - 1).toString()).set('size', size.toString());
    if (orderBy && orderField) {
      params.set('orderBy', orderBy).set('orderField', orderField);
    }
    return this.httpClient.post<Page<ReturnType>>(`${this.getFullAPIUrl(endpoint)}?${params.toString()}`, filter).pipe(
      map((item) => {
        return {
          ...item,
          content: item.content.map((i) => this.fromServerModel(i))
        };
      })
    );
  }

  get<ReturnType>(id: string | number, endpoint?: string): Observable<ReturnType> {
    return this.httpClient
      .get<ReturnType>(`${this.getFullAPIUrl(endpoint)}/${id}`)
      .pipe(map((json) => this.fromServerModel(json)));
  }

  add<ReturnType>(resource: ReturnType, endpoint?: string): Observable<any> {
    return this.httpClient.post(`${this.getFullAPIUrl(endpoint)}`, this.toServerModel(resource));
  }

  delete(id: string | number, endpoint?: string): Observable<any> {
    return this.httpClient.delete(`${this.getFullAPIUrl(endpoint)}/${id}`);
  }

  update<ReturnType>(resource: ReturnType, endpoint?: string) {
    return this.httpClient.put(`${this.getFullAPIUrl(endpoint)}`, this.toServerModel(resource));
  }

  patch<ReturnType>(resource: ReturnType, endpoint?: string) {
    return this.httpClient.patch(`${this.getFullAPIUrl(endpoint)}`, this.toServerModel(resource));
  }
}
