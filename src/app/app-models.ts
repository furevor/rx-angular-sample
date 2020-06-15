export class CardFilter {
  constructor(category: string = '', subCategory: string = '') {
    this.category = category;
    this.subCategory = subCategory;
  }
  category: string;
  subCategory?: string;
}

export interface Card {
  title: string;
  price: number;
  unit: string;

  category: string;
}