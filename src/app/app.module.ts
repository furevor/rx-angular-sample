import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsFilterComponent } from './cards-filter/cards-filter.component';

@NgModule({
  declarations: [
    AppComponent, CardsFilterComponent, CardsListComponent, CardsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
