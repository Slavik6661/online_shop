import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BasketItem {
  id: string|number;
  name: string;
  image: string[];
  oldPrice: number;
  discount?: number|null;
  inStock: boolean;
  price: number;
  quantity: number;
}
interface BasketState {
  items: BasketItem[];
  totalPrice: number;
}
const initialState: BasketState = {
  items: [],
  totalPrice: 0,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += action.payload.price * action.payload.quantity;
    },

    removeItem: (state, action: PayloadAction<{ id:number}>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCard: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCard } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketTotalPrice = (state: RootState) =>state.basket.totalPrice

export default basketSlice.reducer;