import  { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/Iproducts/products";
import { SortItem, SortConfig} from "../../interfaces/sortItem";
import axios from "axios";

export const featchSortItems = createAsyncThunk("sort/featchSortItems", async () => {
  const response = await axios.get("http://localhost:3001/0");
  return response.data.sortItems;
})

  interface ProductsState {
    productData: Product[];
    sortedProducts: Product[];
    sortConfig: SortConfig;
    sortItems: SortItem[];
    slectedItem: number;
    status: "loading" | "success" | "error";
  }

  const initialState: ProductsState = {
    productData:[],
    sortedProducts: [], 
    sortItems: [],
    slectedItem: JSON.parse(localStorage.getItem("selectedItem") || "0"),
    status: "loading",
    sortConfig: { sortKey: "popularity", order: "desc" },
  };
 
const sortSlice = createSlice({
   name: "sort",
   initialState,
   reducers: {

    setSelectedSortItem (state, action: PayloadAction<number>) {
      localStorage.setItem("selectedItem", JSON.stringify(action.payload - 1));
      state.slectedItem = JSON.parse(localStorage.getItem("selectedItem") || "0");
    },

    setSortConfig (state, action: PayloadAction<{sortConfig: SortItem, products: Product[]}>) {
      console.log(action.payload);
        const products = action.payload.products
        const {sortKey, order} = action.payload.sortConfig;
        state.sortConfig  = {sortKey, order}
        state.sortedProducts = sortArry(products, {sortKey, order});
    },

  },
    extraReducers: (builder) => {
      builder.addCase(featchSortItems.pending, (state) => {
        state.status = "loading";
      });

      builder.addCase(featchSortItems.fulfilled, (state, action: PayloadAction<SortItem[]>) => {
        state.status = "success";
        state.sortItems = action.payload;
      });
      builder.addCase(featchSortItems.rejected, (state) => {
        state.status = "error";
      })
    }
     
   })


const sortArry = (productData: Product[], {sortKey, order}: SortConfig): Product[] => {
  
    return [...productData].sort((a, b) => {
        const valA = sortKey in a ? a[sortKey as keyof Product] : undefined;
        const valB = sortKey in b ? b[sortKey as keyof Product] : undefined;

        if (valA === undefined || valB === undefined) {
            return 0;
        }

        if (typeof valA === "string" && typeof valB === "string") {
            return order === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }

        if (typeof valA === "number" && typeof valB === "number") {
            return order === "asc" ? valA - valB : valB - valA;
        }

        return 0;
    });
};

export const {setSortConfig, setSelectedSortItem } = sortSlice.actions
export const getSortedItems = (state:{sort:ProductsState}) => state.sort.sortItems;
export const selectSortedProducts = (state:{sort:ProductsState}) => state.sort.sortedProducts;
export const getSelectedSortItem = (state:{sort:ProductsState}) => state.sort.slectedItem;
export default sortSlice.reducer