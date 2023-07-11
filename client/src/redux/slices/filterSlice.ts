import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: { name: 'Popular', sortType: 'rating' },
  category: { name: '', ctg: null },
  search: '',
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSort, setCtg, setFilters, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
