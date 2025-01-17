import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import filterProductData from "../../jsonData/filterData.json";
import { RootState } from "../store";
import { IFilterItem } from "../../interfaces/filterProduct/IfilterProduct";
import axios from "axios";

// Эмитация запроса к серверу в дальнейшем добавить запрос к серверу
export const fetchFilterProductData = createAsyncThunk(
  "filterProduct/fetchFilterProductData", 
  async ({category}: {category: string} ) => {
    const response = await axios.get("http://localhost:3001/0");
    return response.data.filterData[category];
  }
);

interface FilterProductState {
    filterProductData: IFilterItem[];
    status: "loading" | "success" | "error";
}

const initialState: FilterProductState = {
  filterProductData: [],
  status: "loading"
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilterProductData.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchFilterProductData.fulfilled, (state, action) => {
      state.status = "success";
      state.filterProductData = action.payload;
      // state.filterProductData = Object.values(action.payload).flat() as IFilterItem[];

    })
    .addCase(fetchFilterProductData.rejected, (state) => {
      state.status = "error";
    })
  },
});


export const  filterProductSelector = (state:RootState) => state.filterProduct.filterProductData;
export default filterProductSlice.reducer;