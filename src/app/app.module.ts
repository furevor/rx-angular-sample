import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsFilterComponent } from './cards-filter/cards-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileCardFilterComponent } from './mobile-card-filter/mobile-card-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        CardsFilterComponent,
        CardsListComponent,
        CardsContainerComponent,
        MobileCardFilterComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
