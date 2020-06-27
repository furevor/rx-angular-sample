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
        this.filterHasBeenChanged.emit(new CardFilter(filter.category, filter.subCategory, [...filter.subCategories]));
    }
}
