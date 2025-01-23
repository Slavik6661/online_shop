import { configureStore} from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import uiReducer from './slices/uiSlice';
import basketReducer from './slices/basketSlice';
import sortReducer from './slices/sortSlice';
import saleSlices from './slices/saleSlices';
import favoriteReducer from './slices/favoriteSlice'
import filterProductReducer from './slices/filtersProductSlice/filterProductSlice';
import selectProductReducer from './slices/selectProductSlice';
import productReducer from './slices/getProductSlice';
import smartponeFilterReducer from './slices/filtersProductSlice/smartphoneFilter';

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
        smartphoneFilter: smartponeFilterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store