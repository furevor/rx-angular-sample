import { Injectable } from '@angular/core';
import { CardFilter, Card } from '../app-models';
import { Observable, of } from 'rxjs';

const fakeFilters: CardFilter[] = [
  { category: 'top', subCategory: 'best-choice' },
  { category: 'medium', subCategory: 'best-from-medium-choice' },
  { category: 'low', subCategory: 'best-from-low-choice' },
]

const fakeCards: Card[] = [
  {title: 'apple', price: 13, unit: 'usd', category: 'top', },
  {title: 'apricot', price: 11, unit: 'usd', category: 'top', },
  {title: 'avocado', price: 9, unit: 'usd', category: 'top', },
  {title: 'coconut', price: 8, unit: 'usd', category: 'top', },
  {title: 'mandarin', price: 2, unit: 'usd', category: 'medium', },
  {title: 'grapefruit', price: 4, unit: 'usd', category: 'medium', },
  {title: 'lime', price: 10, unit: 'usd', category: 'low', },
  {title: 'melon', price: 9, unit: 'usd', category: 'low', },
  {title: 'peach', price: 5, unit: 'usd', category: 'low', },
  {title: 'pomegranate', price: 12, unit: 'usd', category: 'medium', },
  {title: 'watermelon', price: 15, unit: 'usd', category: 'medium', },
]

@Injectable({
    providedIn: 'root',
})
export class FakeBackendService {

    constructor() {}

    requestFilters(): Observable<CardFilter[]> {
      return of(fakeFilters);
    }

    requestCards(): Observable<Card[]> {
      return of(fakeCards);
    }
}