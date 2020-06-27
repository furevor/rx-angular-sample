import { Injectable } from '@angular/core';
import { FakeBackendService } from './fake-backend.service';
import { CardFilter } from '../app-models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FilterDataService {
    constructor(private fakeBackendService: FakeBackendService) {}

    findFilterByRoute(filters: CardFilter[], routerParam: string): CardFilter {
        if (routerParam) {
            return filters.find((filter) => filter.category === routerParam);
        } else {
            return new CardFilter({});
        }
    }

    getFilters(): Observable<CardFilter[]> {
        return this.fakeBackendService.requestFilters();
    }
}
