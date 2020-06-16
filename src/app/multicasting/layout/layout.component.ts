import { Component, OnInit } from '@angular/core';
import { MockBackendService } from '../services/mock-backend.service';
import { delay, finalize, switchMap, tap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    constructor(private mockBackendService: MockBackendService) {}

    subs1$;
    subs2$;

    ngOnInit() {
        // const subs1 = this.mockBackendService.data$.subscribe((val) => console.log('This is the first value', val));
        this.subs1$ = this.mockBackendService.data$.pipe(
            tap((val) => console.log('This is the first value', val)),
            finalize(() => console.log('Subs1 sequence complete at', new Date())),
        );

        // const subs2 = this.mockBackendService.data$.subscribe((val) => console.log('This is the second value', val));
        // const subs2 = timer(2000)
        //     .pipe(switchMap(() => this.mockBackendService.data$))
        //     .subscribe((val) => console.log('This is the second value', val));

        this.subs2$ = timer(2000)
            .pipe(switchMap(() => this.mockBackendService.data$))
            .pipe(
                tap((val) => console.log('This is the second value', val)),
                finalize(() => console.log('Subs2 sequence complete at', new Date())),
            );
    }

    subscribeOnceAgain() {
        const subs1 = this.mockBackendService.data$.subscribe(
            (val) => console.log('This is the button subs value', val),
            (error) => {},
            () => {
                console.log('Button subs has completed');
            },
        );
    }

    nextValue() {
        // this.mockBackendService.data$.next(1000);
    }

    stopInterval() {
        this.mockBackendService.stopInterval$.next(1000);
    }
}
