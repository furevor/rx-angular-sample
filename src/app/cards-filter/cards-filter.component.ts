import { Component, OnInit, Input } from '@angular/core';
import { CardFilter } from '../app-models';

@Component({
  selector: 'app-cards-filter',
  templateUrl: './cards-filter.component.html',
  styleUrls: ['./cards-filter.component.scss'],
})
export class CardsFilterComponent implements OnInit {

  @Input() filters: CardFilter[] = [];
  constructor() { }

  ngOnInit() {
  }

}
