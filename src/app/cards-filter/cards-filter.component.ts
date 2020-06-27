import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CardFilter } from '../app-models';

@Component({
    selector: 'app-cards-filter',
    templateUrl: './cards-filter.component.html',
    styleUrls: ['./cards-filter.component.scss'],
})
export class CardsFilterComponent implements OnInit {
    @Input() filters: CardFilter[] = [];
    @Output() filterHasBeenChanged = new EventEmitter<CardFilter>();
    constructor() {}

    ngOnInit() {}

    subCategoryChanged(filter: CardFilter) {
        const { category, subCategory, subCategories } = filter;
        this.filterHasBeenChanged.emit(
            new CardFilter({
                category,
                subCategory,
                subCategories: [...subCategories],
            }),
        );
    }
}
