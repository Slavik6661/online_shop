import { createSlice,createAsyncThunk } from  "@reduxjs/toolkit";
import categories from "../../jsonData/categories.json";
import axios from "axios";
import { RootState } from "../store";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    if(response.status !== 200){ 
        throw new Error(response.statusText);
    }
    console.log('axios', categories);
    
    return categories;
})

const categoriesSlice = createSlice({
    name:"categories",
    initialState:{
        items:[] as Array<{id:number,title:string,image:string}>,
        status:"loading" as "loading" | "success" | "error"
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = "error";
            })
    },
});

export const selectCategories = (state: RootState) => state.categories.items;
export default categoriesSlice.reducer
