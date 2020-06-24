import { Injectable } from '@angular/core';
import { CardFilter, Card } from '../app-models';
import { Observable, of } from 'rxjs';

const fakeFilters: CardFilter[] = [
    {
        category: 'top',
        subCategory: 'best-choice',
        subCategories: [
            {
                checked: true,
                title: 'sweet',
            },
            {
                checked: false,
                title: 'salty',
            },
        ],
    },
    {
        category: 'medium',
        subCategory: 'best-from-medium-choice',
        subCategories: [
            {
                checked: false,
                title: 'sweet',
            },
            {
                checked: false,
                title: 'salty',
            },
        ],
    },
    { category: 'low', subCategory: 'best-from-low-choice' },
];

const fakeCards: Card[] = [
    { title: 'apple', price: 13, unit: 'usd', category: 'top', flavor: 'sweet' },
    { title: 'apricot', price: 11, unit: 'usd', category: 'top', flavor: 'sweet' },
    { title: 'avocado', price: 9, unit: 'usd', category: 'top', flavor: 'salty' },
    { title: 'coconut', price: 8, unit: 'usd', category: 'top', flavor: 'salty' },
    { title: 'mandarin', price: 2, unit: 'usd', category: 'medium', flavor: 'salty' },
    { title: 'grapefruit', price: 4, unit: 'usd', category: 'medium', flavor: 'salty' },
    { title: 'lime', price: 10, unit: 'usd', category: 'low', flavor: 'sweet' },
    { title: 'melon', price: 9, unit: 'usd', category: 'low', flavor: 'salty' },
    { title: 'peach', price: 5, unit: 'usd', category: 'low', flavor: 'sweet' },
    { title: 'pomegranate', price: 12, unit: 'usd', category: 'medium', flavor: 'sweet' },
    { title: 'watermelon', price: 15, unit: 'usd', category: 'medium', flavor: 'salty' },
];

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
