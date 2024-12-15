import  { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productData from "../../jsonData/productData.json"
import sortItems from "../../jsonData/sortItems.json"
import { RootState } from "../store";

interface SortConfig {
    sortKey: string;
    order: "asc" | "desc";
  }
  
  interface SortItem {
    id: number;
    value: string;
    sortKey: string;
    order: "asc" | "desc";
  }
  
  interface ProductsState {
    productData: any[]; 
    sortedProducts: any[];
    sortConfig: SortConfig;
    sortItems: any[];
  }

  const initialState: ProductsState = {
    productData: productData, // Изначальные данные о продуктах
    sortedProducts: productData, // Изначально отсортированные данные
    sortItems: sortItems,
    sortConfig: { sortKey: "popularity", order: "desc" }, // Дефолтная сортировка
  };
 
const sortSlice = createSlice({
   name: "sort",
   initialState,
   reducers: {
    setSortConfig (state, action: PayloadAction<SortItem>) {
        const {sortKey, order} = action.payload;
        state.sortConfig  = {sortKey, order}
        state.sortedProducts=sortArry(state.productData,{sortKey, order});
        console.log(state.sortedProducts);
        
    }
     
   }
})

const sortArry = (productData: any[], {sortKey, order}:SortConfig):any[] => {
    return [...productData].sort((a, b) => {
     const valA = a[sortKey];
     const valB = b[sortKey];

      if (valA === undefined || valB === undefined) {
        return 0;
      }
      
       if(typeof valA === "string" && typeof valB === "string") {
        if(valA<valB) return order === "asc" ? -1 : 1;
        if(valA>valB) return order === "asc" ? 1 : -1;
       }

       if(typeof valA === "number" && typeof valB === "number") {
        return  order === "asc" ? valA - valB : valB - valA
       }

       return 0
    })
}


export const {setSortConfig } = sortSlice.actions
export const selectSortedProducts = (state:{sort:ProductsState}) => state.sort.sortedProducts;
export const selectSortedItems = (state:{sort:ProductsState}) => state.sort.sortItems
export default sortSlice.reducer