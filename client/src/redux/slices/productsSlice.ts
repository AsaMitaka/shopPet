import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk('product/fetchAllProducts', async (params) => {
  const { category, sortBy, orderBy } = params;

  const response = await axios.get(
    `https://64a83dc3dca581464b858768.mockapi.io/products?${category}&sortBy=${sortBy}&order=${orderBy}`,
  );

  return response.data;
});

const initialState = {
  products: [],
  status: 'loading',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.products = [];
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.status = 'error';
      state.product = [];
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
