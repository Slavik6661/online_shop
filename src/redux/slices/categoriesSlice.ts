import { createSlice,createAsyncThunk, PayloadAction } from  "@reduxjs/toolkit";
import categories from "../../jsonData/categories.json";
import axios from "axios";
import { RootState } from "../store";
import { ICategory, CategoryType } from '../../interfaces/category/types';

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await axios.get("http://localhost:3001/0");
    if(response.status !== 200){ 
        throw new Error(response.statusText);
    }
    return response.data.categories;
})

interface CategoriesState {
    items: ICategory[];
    status: "loading" | "success" | "error";
    selectedCategory: ICategory | null;
}

const initialState: CategoriesState = {
    items: [],
    status: "loading",
    selectedCategory: JSON.parse(localStorage.getItem("selectedCategory") || "null")
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction<number>) => {
            const category = state.items.find(item => item.id === action.payload) || null;
            state.selectedCategory = category;
            localStorage.setItem("selectedCategory", JSON.stringify(category));
        },

        clearSelectedCategory: (state) => {
            state.selectedCategory = null;
            localStorage.removeItem("selectedCategory");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload as ICategory[];
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = "error";
                state.items = [];
            });
    }
});

export const selectCategoriesItems = (state: RootState) => state.categories.items;
export const selectThisCategory = (state: RootState) => state.categories.selectedCategory;
export const {setSelectedCategory, clearSelectedCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer
