import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardFilter } from '../app-models';

@Component({
    selector: 'app-mobile-card-filter',
    templateUrl: './mobile-card-filter.component.html',
    styleUrls: ['./mobile-card-filter.component.scss'],
})
export class MobileCardFilterComponent implements OnInit {
    @Input() filters: CardFilter[] = [];
    @Input() currentFilter: CardFilter;
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
