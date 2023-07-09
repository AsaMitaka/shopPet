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
  },
});

export const { setSort, setCtg } = filterSlice.actions;
export default filterSlice.reducer;
