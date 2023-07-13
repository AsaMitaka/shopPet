import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type ProductItem = {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  weight: string;
  id: string;
};

type ProductSliceState = {
  products: ProductItem[];
  status: 'loading' | 'success' | 'error';
};

type fetchAllProductsParams = {
  category: string;
  sortBy: string;
  orderBy: string;
};

export const fetchAllProducts = createAsyncThunk<ProductItem[], fetchAllProductsParams>(
  'product/fetchAllProducts',
  async (params) => {
    const { category, sortBy, orderBy } = params;

    const response = await axios.get<ProductItem[]>(
      `https://64a83dc3dca581464b858768.mockapi.io/products?${category}&sortBy=${sortBy}&order=${orderBy}`,
    );

    return response.data;
  },
);

const initialState: ProductSliceState = {
  products: [],
  status: 'loading',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductItem[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state, action) => {
      state.status = 'loading';
      state.products = [];
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = 'error';
      state.products = [];
    });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
