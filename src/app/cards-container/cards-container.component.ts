import { Component, OnInit } from '@angular/core';
import { Observable, merge, Subject, defer, concat } from 'rxjs';
import { map, switchMap, publishReplay, refCount, tap } from 'rxjs/operators';
import { CardsStoreService } from '../store/cards-store.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CardFilter, Card } from '../app-models';
import { FilterDataService } from '../services/filter-data.serivce';
import { CardsDataService } from '../services/cards-data.service';

@Component({
    selector: 'app-cards-container',
    templateUrl: './cards-container.component.html',
    styleUrls: ['./cards-container.component.scss'],
    providers: [CardsStoreService],
})
export class CardsContainerComponent implements OnInit {
    // readonly sidebarFilterChanged$: Subject<CardFilter> = new Subject<CardFilter>();
    readonly filterListChanges$: Subject<CardFilter[]> = new Subject<CardFilter[]>();
    readonly filters$: Observable<CardFilter[]> = this.state.select('cardsFilters');
    readonly cards$: Observable<Card[]> = this.state.select('cardsList');
    readonly currentFilter$: Observable<CardFilter> = this.state.select('currentFilter');

    private showMobileVersion = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private state: CardsStoreService,
        private filtersService: FilterDataService,
        private cardsService: CardsDataService,
    ) {
        this.state.select('currentFilter').subscribe((val) => {
            console.warn('Следим за стейтом фильтра... ', val);
        });
        this.connectToStore();
    }

    ngOnInit() {}

    connectToStore() {
        const filterFromUrl$: Observable<CardFilter> = this.route.paramMap.pipe(
            map((params: ParamMap) => params.get('filter')),
            switchMap((searchedFilter: string) =>
                this.filters$.pipe(
                    map((filters: CardFilter[]) => this.filtersService.findFilterByRoute(filters, searchedFilter)),
                ),
            ),
        );
        const filterState$: any = filterFromUrl$.pipe(publishReplay(1), refCount());

        const filteredCards$: Observable<Card[]> = this.currentFilter$.pipe(
            switchMap((searchedCategoryFilter: CardFilter) => this.cardsService.filterCards(searchedCategoryFilter)),
        );

        const filterCardsArray$: Observable<CardFilter[]> = concat(
            defer(() => this.filtersService.getFilters()),
            this.filterListChanges$,
        );

        this.state.connect('currentFilter', filterState$);
        this.state.connect('cardsFilters', filterCardsArray$);
        this.state.connect('cardsList', filteredCards$);
    }

    updateFilters(categoryFilter: CardFilter[]): void {
        this.filterListChanges$.next(categoryFilter);
    }

    showState() {
        console.log('Here is your state ', this.state.get());
    }

    toggleMobileVersion() {
        this.showMobileVersion = !this.showMobileVersion;
    }
}
