import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    
  },
  reducers: {
   
  },
});

export const { add, remove, update } = cartSlice.actions;

export default cartSlice.reducer;
