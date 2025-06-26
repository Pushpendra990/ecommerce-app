import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => { state.push(action.payload); },
    clearCart: () => []
  }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
