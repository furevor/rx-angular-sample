import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardFilterComponent } from './mobile-card-filter.component';

describe('MobileCardFilterComponent', () => {
    let component: MobileCardFilterComponent;
    let fixture: ComponentFixture<MobileCardFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MobileCardFilterComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileCardFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
