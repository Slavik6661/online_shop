import { IFilterItem } from "./IfilterProduct";

export interface IFilterNotebook {
    priceRange: IFilterItem;
    processor: IFilterItem;
    ram: IFilterItem;
    memory: IFilterItem;
    brands: IFilterItem;
    screenSize: IFilterItem;
    years: IFilterItem;
}

