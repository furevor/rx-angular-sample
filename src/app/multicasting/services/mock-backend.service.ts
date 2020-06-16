import { Injectable } from '@angular/core';
import { defer, from, interval, of, Subject } from 'rxjs';
import { publish, publishReplay, refCount, share, take, takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class MockBackendService {
    private elementsCount = 0;
    public stopInterval$: Subject<any> = new Subject();
    // public data$ = defer(() => of({ hello: 'world', number: this.elementsCount++ })).pipe(publish(), refCount());
    // public data$ = interval(1000).pipe(take(2));
    // public data$ = interval(1000).pipe(take(2), share());
    // public data$ = interval(1000).pipe(take(3), publish(), refCount());

    // public data$ = from([1000, 2000, 3000]).pipe(
    //     // take(2),
    //     publishReplay(2),
    //     refCount(),
    // );

    // public data$ = interval(1000).pipe(take(5), publishReplay(2), refCount());
    public data$ = interval(2000).pipe(takeUntil(this.stopInterval$), publishReplay(2), refCount());
    constructor() {}
}
