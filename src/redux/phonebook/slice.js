import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addFilter: (_state, { payload }) => {
      return payload.toLowerCase();
    },
  },
});

export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;
