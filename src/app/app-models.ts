export class CardFilter {
    constructor({ isActive = false, category = '', subCategory = '', subCategories = [] }) {
        this.isActive = isActive;
        this.category = category;
        this.subCategory = subCategory;
        this.subCategories = subCategories;
    }
    isActive?: boolean;
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
