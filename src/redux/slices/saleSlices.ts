import { createSlice,createAsyncThunk } from  "@reduxjs/toolkit";
import { Product } from "../../interfaces/Iproducts/products";
import axios from "axios";

  interface SalesState {
    products: Product[];
    productsOnSale: Product[];
    status: "loading" | "success" | "error";
  }
  const initialState: SalesState = {
    products: [],
    productsOnSale: [],
    status: "loading",
  };

export const fetchSales = createAsyncThunk("categories/fetchSlases", async () => {
    const response = await axios.get("http://localhost:3001/0");
    if(response.status !== 200){ 
        throw new Error(response.statusText);
    }
    console.log('axios sales', response.data.products);
    
    return  response.data.products;
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
                // state.products = action.payload;
                state.productsOnSale = filterSaleProducts(action.payload);
            })
            .addCase(fetchSales.rejected, (state) => {
                state.status = "error";
            })
    },
});

const filterSaleProducts = (products: Product[]): Product[] => {
    console.log('products sales', Object.values(products).flat());
    products = Object.values(products).flat();
    return products.map(item => ({
        ...item,
        quantity: 0
    })).filter(item => item.isOnSale);
}

export const selectItemSales = (state:{ sales:SalesState }) => state.sales.productsOnSale;
export default salesSlice.reducer


// const allProducts = [
//     ...action.payload[0].smartphone,
//     ...action.payload[0].tv,
//     ...action.payload[0].tablets,
//     ...action.payload[0].headphones,
//     ...action.payload[0].gamingConsoles,
//     ...action.payload[0].vacuumCleaners,
//     ...action.payload[0].speakers
// ] as unknown as Product[];