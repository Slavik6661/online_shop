import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Smartphone } from "../../../interfaces/Iproducts/IsmartPhone/smartPhone";
import { RootState } from "../../store";

type filters = {
  priceRange: number[];
  memoryOptions: string[];
  storageOptions: string[];
  brands: string[];
  numberCores: string[];
  years: string[];
};

interface SmartphoneFilterState {
  filterListSmartphones: Smartphone[];
  selectedFilters: filters;
  status: "loading" | "success" | "error";
}

const initialState: SmartphoneFilterState = {
  filterListSmartphones: [],
  selectedFilters: {
    priceRange: [0, 200000],
    memoryOptions: [],
    storageOptions: [],
    brands: [],
    numberCores: [],
    years: [],
  },
  status: "loading",
};

const smartphoneFilter = createSlice({
  name: "smartphoneFilter",
  initialState,
  reducers: {
    updateFilter(
      state,
      action: PayloadAction<{ filterName: string; value: any }>
    ) {
      const { filterName, value } = action.payload;
      state.selectedFilters = {
        ...state.selectedFilters,
        [filterName]: value,
      };
    },
    filterSmartphones(state, action) {
      const sortedProducts = action.payload;
      console.log("smartphoneFilterSelector", sortedProducts);
      state.filterListSmartphones = filterSmartphonesLogic(
        sortedProducts,
        state.selectedFilters
      );
      console.log("smartphoneFilterSelector", state.filterListSmartphones);
    },
  },
});

const filterSmartphonesLogic = (
  sortedProducts: Smartphone[],
  selectedFilters: filters
): Smartphone[] => {
  return sortedProducts.filter((smartphone) => {
    return (
      smartphone.price >= selectedFilters.priceRange[0] &&
      smartphone.price <= selectedFilters.priceRange[1] &&
      (selectedFilters.memoryOptions.length === 0 ||
        selectedFilters.memoryOptions.includes(
          smartphone.specifications.memory.internal_storage
        )) &&
      (selectedFilters.storageOptions.length === 0 ||
        selectedFilters.storageOptions.includes(
          smartphone.specifications.memory.RAM
        )) &&
      (selectedFilters.brands.length === 0 ||
        selectedFilters.brands.includes(
          smartphone.specifications.general.brand
        )) &&
      (selectedFilters.numberCores.length === 0 ||
        selectedFilters.numberCores.includes(
          String(smartphone.specifications.OS_and_processor.core_count)
        )) &&
      (selectedFilters.years.length === 0 ||
        selectedFilters.years.includes(
          String(smartphone.specifications.general.release_year)
        ))
    );
  });
};

export const { updateFilter, filterSmartphones } = smartphoneFilter.actions;
export const smartphoneFilterSelector = (state: RootState) =>
  state.smartphoneFilter.filterListSmartphones;
export default smartphoneFilter.reducer;
