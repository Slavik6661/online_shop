import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import uiReducer from './slices/uiSlice';
import basketReducer from './slices/basketSlice';
import sortReducer from './slices/sortSlice';
import saleSlices from './slices/saleSlices';

const store = configureStore({
    reducer:{
        categories:categoriesReducer,
        ui:uiReducer,
        basket:basketReducer,
        sort:sortReducer,
        sales:saleSlices
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store