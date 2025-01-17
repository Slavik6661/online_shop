import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../interfaces/Iproducts/products"
import axios from "axios";

 export const fetchSelectedProduct = createAsyncThunk(
  "product/fetchProduct",
  async (arg: { category: string, id: number }) => {
    const response = await axios.get('http://localhost:3001/0');
    return response.data.products[arg.category][arg.id - 1]
  }
);

const selectProductSlise = createSlice({
    name: "selectProduct", 
    initialState: {
        product: {} as Product,
        status: "loading" as "loading" | "success" | "error",
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSelectedProduct.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchSelectedProduct.fulfilled, (state, action) => {
            state.status = "success";
            state.product = action.payload;
        });
        builder.addCase(fetchSelectedProduct.rejected, (state) => {
            state.status = "error";
        });
    }
});
export const selectProduct = (state:RootState) => state.selectProduct.product
export default selectProductSlise.reducer;