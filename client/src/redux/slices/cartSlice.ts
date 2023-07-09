import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { getProducts } = cartSlice.actions;
export default cartSlice.actions;
