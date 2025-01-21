import axios from "axios";
import { RootState } from "../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/Iproducts/products";

export const featchProduct = createAsyncThunk(
  "product/featchProduct",
  async ({ category }: { category?: string }) => {
    const response = await axios.get("http://localhost:3001/0");
    if (!response.status) {
      throw new Error("Failed to fetch products");
    }
    return { products: response.data.products, category };
  }
);
interface ProductState {
  products: Record<string, Product[]>;
  selectedProduct: Product[];
  status: "loading" | "success" | "error";
}

const initialState: ProductState = {
  products: {},
  selectedProduct: [],
  status: "loading",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(featchProduct.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(
      featchProduct.fulfilled,
      (
        state,
        action: PayloadAction<{
          products: Record<string, Product[]>;
          category?: string;
        }>
      ) => {
        state.status = "success";
        state.products = action.payload.products;
        const category = action.payload.category;
        category
          ? (state.selectedProduct = state.products[category])
          : (state.selectedProduct = Object.values(state.products).flat());
      }
    );

    builder.addCase(featchProduct.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const getProductsByCategorySlice = (state: RootState) =>
  state.product.selectedProduct;
export const getProduct = (state: RootState) => state.product.products;
export default productSlice.reducer;

