import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardItem {
    id:string;
    name:string;
    price:number;
    quantity:number
}

interface CartState  {
    items : CardItem[]
}
const initialState: CartState  = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action: PayloadAction<CardItem>){
            console.log(action.payload)
            state.items.push(action.payload)
        },
        removeFromCart(state, action: PayloadAction<string>){
            state.items=state.items.filter(item =>item.id !== action.payload)
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer