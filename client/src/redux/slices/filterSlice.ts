import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: { name: 'Popular', sortType: 'rating' },
  category: { name: '', ctg: null },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCtg: (state, action) => {
      state.category = action.payload;
    },
    setFilters: (state, action) => {
      state.sort = action.payload.sort;
      state.category = action.payload.category;
    },
  },
});

export const { setSort, setCtg, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
