import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import getItemsFromLC from '../../utils/getItemsFromLC';
import getTotalPrice from '../../utils/getTotalPrice';

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  count: number;
};

type CartSliceState = {
  totalPrice: number;
  cart: CartItem[];
};

const { cart, totalPrice } = getItemsFromLC();

const initialState: CartSliceState = {
  totalPrice: totalPrice,
  cart: cart,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<CartItem | { id: string; name: string; price: number; image: string }>,
    ) => {
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        const newItem = { ...action.payload, count: 1 };
        state.cart.push(newItem);
      }
      state.totalPrice = getTotalPrice(state.cart);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.totalPrice = getTotalPrice(state.cart);
    },
    deleteOneProduct: (state, action: PayloadAction<string>) => {
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
      state.totalPrice = getTotalPrice(state.cart);
    },
    deleteAllProducts: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, deleteOneProduct, deleteProduct, deleteAllProducts } = cartSlice.actions;
export default cartSlice.reducer;
