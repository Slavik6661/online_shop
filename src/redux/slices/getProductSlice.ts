import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../interfaces/Iproducts/products";
import { RootState } from "../store";

export const featchProduct = createAsyncThunk("product/featchProduct", async ({category}:{category?:string}) => {
    const response = await axios.get("http://localhost:3001/0");

    if(!response.status){
        throw new Error("Failed to fetch products");
    }
    return {products:response.data.products, category}
})
 interface ProductState {
    products:Record<string, Product[]>
    selectedProduct: Product[];
    status: "loading" | "success" | "error";
 }

 const initialState: ProductState = {
    products: {},
    selectedProduct:[],
    status: "loading"
 }
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    
    },
    extraReducers:(builder) => {
        builder.addCase(featchProduct.pending, (state) => {
            state.status = "loading";
        })

        builder.addCase(featchProduct.fulfilled, (state, action:PayloadAction<{products:Record<string, Product[]>; category?:string}>) => {
            state.status = "success";
            state.products = action.payload.products
       
            const category = action.payload.category
           if(category){
            state.selectedProduct = state.products[category]
           }else{
           state.selectedProduct = Object.values(state.products).flat()
           }
            
            console.log('state.selectedProduct$$$$$$$$$$$$$$',state.selectedProduct);
        })

        builder.addCase(featchProduct.rejected, (state) => {
            state.status = "error";
        })
    }
})

export const getProductsByCategorySlice = (state:RootState) => state.product.selectedProduct;
export const getProduct = (state:RootState) => state.product.products
export default productSlice.reducer;


    // getProductsByCategory: (state, action) => {
        //     const  { poducts, category } = action.payload
        //     console.log('redux!!!!!!!!', state.products);
            
        //     if(poducts){
        //         state.selectedProduct = poducts[category]
        //         console.log('new',poducts[category])
        //     }
        // }