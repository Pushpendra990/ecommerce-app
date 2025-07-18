import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => { state.push(action.payload); },
    removeFromCart: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
    clearCart: () => []
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
