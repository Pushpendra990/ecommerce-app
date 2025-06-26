import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get('http://localhost:5000/api/products');
  return res.data.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => action.payload);
  }
});

export default productSlice.reducer;
