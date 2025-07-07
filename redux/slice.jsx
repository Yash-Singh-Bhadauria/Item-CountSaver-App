import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addOrUpdateValue: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    deleteValue: (state, action) => {
      const key = action.payload;
      delete state[key];
    },
  },
});

export const { addOrUpdateValue, deleteValue } = dataSlice.actions;
export default dataSlice.reducer;
