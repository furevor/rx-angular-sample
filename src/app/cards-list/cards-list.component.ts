import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app-models';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() cards: Card[] = [];

  constructor() { }

  ngOnInit() {
  }

}
