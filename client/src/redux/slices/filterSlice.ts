import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type sortState = {
  name: string;
  sortType: string;
};

type categoryState = {
  name: string;
  ctg: string | null;
};

type filterState = {
  sort: sortState;
  category: categoryState;
  search: string;
};

const initialState: filterState = {
  sort: { name: 'Popular', sortType: 'rating' },
  category: { name: '', ctg: null },
  search: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<sortState>) => {
      state.sort = action.payload;
    },
    setCtg: (state, action: PayloadAction<categoryState>) => {
      state.category = action.payload;
    },
    setFilters: (state, action: PayloadAction<filterState>) => {
      state.sort = action.payload.sort;
      state.category = action.payload.category;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSort, setCtg, setFilters, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
