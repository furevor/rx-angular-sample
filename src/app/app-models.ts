export class CardFilter {
    constructor(category: string = '', subCategory: string = '', subCategories: Subcategory[] = []) {
        this.category = category;
        this.subCategory = subCategory;
        this.subCategories = subCategories;
    }
    category: string;
    subCategory?: string;
    subCategories?: Array<Subcategory>;
}

export interface Subcategory {
    checked: boolean;
    title: string;
}

export interface Card {
    title: string;
    price: number;
    unit: string;

    category: string;
    flavor: string;
}
