import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
// import cartReducer from './slices/cartReducer';
// import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    // cart: createReducer,
    // products: productsReducer,
  },
});

export default store;
