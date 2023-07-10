import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        const newItem = { ...action.payload, count: 1 };
        state.cart.push(newItem);
      }
      state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.count, 0);
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.count, 0);
    },
    deleteOneProduct: (state, action) => {
      state.cart = state.cart.filter((item) => {
        if (item.id === action.payload) {
          if (item.count === 1) {
            return false;
          } else {
            item.count -= 1;
          }
        }
        return true;
      });
      state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.count, 0);
    },
    deleteAllProducts: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, deleteOneProduct, deleteProduct, deleteAllProducts } = cartSlice.actions;
export default cartSlice.reducer;
