import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RxState } from '@rx-angular/state';
import { Card, CardFilter } from '../app-models';

export interface CardsAppState {
  cardsList: Card[];
  cardsFilters: CardFilter[];
  currentFilter: CardFilter;
}

@Injectable({
    providedIn: 'root',
})
export class CardsStoreService extends RxState<CardsAppState> {
    readonly state$ = this.select();

    constructor() {
        super();
    }
}
