import { RootState } from "../../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilterItem } from "../../../interfaces/filterProduct/IfilterProduct";


export const fetchFilterProductData = createAsyncThunk(
  "filterProduct/fetchFilterProductData", 
  async ({category}: {category: string} ) => {
    const response = await axios.get("http://localhost:3001/0");
    return response.data.filterData[category];
  }
);

interface FilterProductState {
    filterProductByCategory: IFilterItem[];
    filterProductBySmartphones: [];
    status: "loading" | "success" | "error";
}

const initialState: FilterProductState = {
  filterProductByCategory: [],
  filterProductBySmartphones: [],
  status: "loading"
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState,

  reducers: {
    filterSmartphones(state, action: PayloadAction<[]>){
      state.filterProductBySmartphones = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFilterProductData.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchFilterProductData.fulfilled, (state, action) => {
      state.status = "success";
      state.filterProductByCategory = action.payload;
    })
    .addCase(fetchFilterProductData.rejected, (state) => {
      state.status = "error";
    })
  },
});

export const { filterSmartphones } = filterProductSlice.actions;
export const  filterProductSelector = (state:RootState) => state.filterProduct.filterProductByCategory;
export default filterProductSlice.reducer;