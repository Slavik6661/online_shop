import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Product } from "../../interfaces/Iproducts/products";
import { RootState } from "../store";

interface FavoriteState {
    items: Product[];
    status: "loading" | "success" | "error";
}

const initialState: FavoriteState = {
    items: JSON.parse(localStorage.getItem('favorite') || '[]'),
    status: "loading",
}

const favoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addToFavorite: (state, action: PayloadAction<Product>) => {
            console.log(action.payload);
            state.items.push(action.payload)
            localStorage.setItem('favorite', JSON.stringify(state.items))
        },
        removeFavoriteItems: (state, action) => {
            state.items = state.items.filter((item: Product) => item.id !== action.payload)
            localStorage.setItem('favorite', JSON.stringify(state.items))
        },
    },
})

export const favoriteSliceItems = (state: RootState) => state.favorite.items
export const { addToFavorite, removeFavoriteItems } = favoriteSlice.actions
export default favoriteSlice.reducer