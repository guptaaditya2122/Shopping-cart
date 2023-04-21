import {  createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cart:[]
  },

  reducers: {
    addItemToCart: (state,action) => {
      
      state.cart  = [action.payload, ...state.cart]
    },

    clearCart : (state,action)=>{
      state.cart = []
    }
  }
});

export const { addItemToCart,clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
