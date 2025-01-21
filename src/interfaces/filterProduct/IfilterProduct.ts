interface IFilterOption {
    id: number;
    label: string,
    isChecked: boolean
}

export interface IFilterItem {
    id: number;
    label: string;
    filterName: string;
    type: string;
    searchBare: boolean;
    priceRange?: number[];
    options?: Array<{
        id: number;
        label: string;
        isChecked: boolean;
    }>;
}