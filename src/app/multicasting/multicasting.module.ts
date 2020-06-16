import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MulticastingRoutingModule } from './multicasting-routing.module';

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, MulticastingRoutingModule],
})
export class MulticastingModule {}
