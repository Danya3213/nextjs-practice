import type {ECategory} from "@authPages/enums/category.enum";

export interface ITransactionStatistic {

    category: ECategory;
    value: number;
    color: `#${string}`;
    label: string;
}