import { Injectable } from '@angular/core';
import { FakeBackendService } from './fake-backend.service';
import { CardFilter } from '../app-models';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FilterDataService {
    constructor(private fakeBackendService: FakeBackendService) {}

    findFilterByRoute(routerParam: string): Observable<CardFilter> {
        if (routerParam) {
            const filters$ = this.getFilters();
            return filters$.pipe(
                map((filters: CardFilter[]) => filters.find((filter) => filter.category === routerParam)),
            );
        } else {
            return of(new CardFilter());
        }
    }

    getFilters(): Observable<CardFilter[]> {
        return this.fakeBackendService.requestFilters();
    }
}
