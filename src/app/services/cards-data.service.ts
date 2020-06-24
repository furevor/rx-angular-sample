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

        return cards$.pipe(map((cards: Card[]) => this.getFilteredCards(cards, cardFilter)));
    }

    private getFilteredCards(cards: Card[], cardFilter: CardFilter): Card[] {
        let filteredCards = [];
        if (cardFilter && cardFilter.category) {
            filteredCards = cards.filter((card) => card.category === cardFilter.category);

            if (cardFilter.subCategories && cardFilter.subCategories.some((subcategory) => subcategory.checked)) {
                filteredCards = filteredCards.filter((card) =>
                    cardFilter.subCategories.some(
                        (subcategory) => subcategory.title === card.flavor && subcategory.checked,
                    ),
                );
            }

            return filteredCards;
        } else {
            return cards;
        }
    }

    private getCards(): Observable<Card[]> {
        return this.fakeBackendService.requestCards();
    }
}
// if (cardFilter && cardFilter.category) {
//     return cards.filter((card) => {
//         return (
//             card.category === cardFilter.category &&
//             (cardFilter.subCategories
//                 ? cardFilter.subCategories.some(
//                     (subcategory) => subcategory.title === card.flavor && subcategory.checked,
//                 )
//                 : true)
//         );
//     });
// } else {
//     return cards;
// }
