import { IFilterItem } from "./IfilterProduct";

export interface IFilterTv {
    priceRange: IFilterItem;
    screenSize: IFilterItem;
    screenResolution: IFilterItem;
    brands: IFilterItem;
    screenType: IFilterItem;
    years: IFilterItem;
}

