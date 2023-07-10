import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
