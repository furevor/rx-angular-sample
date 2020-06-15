import { Injectable } from '@angular/core';
import { FakeBackendService } from './fake-backend.service';
import { Card, CardFilter } from '../app-models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CardsDataService {

    constructor(private fakeBackendService: FakeBackendService) {}

    filterCards(cardFilter: CardFilter): Observable<Card[]> {
        const cards$: Observable<Card[]> = this.getCards();

        return cards$.pipe(
            map((cards: Card[]) => this.getFilteredCards(cards, cardFilter)),
        );
    }

    private getCards(): Observable<Card[]> {
      return this.fakeBackendService.requestCards();
    }

    private getFilteredCards(cards: Card[], cardFilter: CardFilter): Card[] {
      if(cardFilter && cardFilter.category) {
        return cards.filter(card => card.category === cardFilter.category);
      } else {
        return cards;
      }
    }
}