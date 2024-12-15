import { createSlice,createAsyncThunk } from  "@reduxjs/toolkit";
import axios from "axios";
import sales from "../../jsonData/sales.json";
import { Product } from "../../interfaces/products";


  interface SalesState {
    items: Product[];
    status: "loading" | "success" | "error";
  }
  const initialState: SalesState = {
    items: [],
    status: "loading",
  };

export const fetchSales = createAsyncThunk("categories/fetchSlases", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    if(response.status !== 200){ 
        throw new Error(response.statusText);
    }
    console.log('axios', sales);
    
    return sales;
})

const salesSlice = createSlice({
    name:"sales",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchSales.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchSales.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(fetchSales.rejected, (state) => {
                state.status = "error";
            })
    },
});

export const selectItemSales = (state:{ sales:SalesState }) => state.sales.items;
export default salesSlice.reducer
