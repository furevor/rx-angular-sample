import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsContainerComponent } from './cards-container/cards-container.component';

const routes: Routes = [
    { path: '', component: CardsContainerComponent, pathMatch: 'full' },
    { path: ':filter', component: CardsContainerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
