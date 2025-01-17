import { configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import categoriesReducer from './slices/categoriesSlice';
import uiReducer from './slices/uiSlice';
import basketReducer from './slices/basketSlice';
import sortReducer from './slices/sortSlice';
import saleSlices from './slices/saleSlices';
import favoriteReducer from './slices/favoriteSlice'
import filterProductReducer from './slices/filterProductSlice';
import selectProductReducer from './slices/selectProductSlice';
import productReducer from './slices/getProductSlice';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, productReducer)

const store = configureStore({
    reducer:{
        product:productReducer,
        categories:categoriesReducer,
        ui:uiReducer,
        basket:basketReducer,
        sort:sortReducer,
        sales:saleSlices,
        favorite:favoriteReducer,
        filterProduct: filterProductReducer,
        selectProduct: selectProductReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store