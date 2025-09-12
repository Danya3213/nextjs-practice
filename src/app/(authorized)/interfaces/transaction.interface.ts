import type {ECategory} from "@authPages/enums/category.enum";

export interface ITransaction {
    date: string;
    type: boolean;
    category: ECategory;
    comment: string;
    sum: number;
    _id: string;
}