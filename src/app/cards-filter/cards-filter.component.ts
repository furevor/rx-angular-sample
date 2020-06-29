import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CardFilter } from '../app-models';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-cards-filter',
    templateUrl: './cards-filter.component.html',
    styleUrls: ['./cards-filter.component.scss'],
})
export class CardsFilterComponent implements OnInit {
    @Input() filters: CardFilter[] = [];
    @Output() filtersListHasBeenChanged = new EventEmitter<CardFilter[]>();
    filtersForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.filtersForm = this.fb.group({
            filters: this.fb.array([]),
        });
    }

    ngOnInit() {
        this.initForm();
        this.patchFiltersForm();
        this.listenFiltersChanges();
    }

    private initForm() {
        if (this.filters) {
            this.filters.forEach((filter) => this.addFilter(filter));
        }
    }

    private patchFiltersForm() {
        if (this.filters) {
            // TODO: change to something like this ...this.filters
            this.filtersForm.patchValue({
                filters: this.filters,
            });
        }
    }

    private addFilter(filter: CardFilter): void {
        const control = this.filtersForm.get('filters') as FormArray;
        control.push(this.initFilter(filter));
    }

    private initFilter(filter: CardFilter) {
        return this.fb.group({
            isActive: false,
            category: '',
            subCategory: '',
            subCategories: this.initSubcategories(filter),
        });
    }

    initSubcategories(filter: CardFilter) {
        const subcategories = this.fb.array([]);
        if (filter.subCategories) {
            filter.subCategories.forEach((subcategory) => {
                subcategories.push(
                    this.fb.group({
                        checked: false,
                        title: '',
                    }),
                );
            });
        }
        return subcategories;
    }

    listenFiltersChanges() {
        this.filtersForm.get('filters').valueChanges.subscribe((filters) => {
            this.filtersListHasBeenChanged.emit(filters);
        });
    }
}
