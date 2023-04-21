import {  createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState:{
    orders:[]
  },

  reducers: {
    addItemToOrders: (state,action) => {
      
      state.orders  = [action.payload, ...state.orders]
    }
  }
});

export const { addItemToOrders } = ordersSlice.actions;

export const selectOrders = (state) => state.orders.orders;

export default ordersSlice.reducer;
