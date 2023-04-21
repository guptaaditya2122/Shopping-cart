import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import cartReduce from '../features/cartSlice' 
import cartReducer from '../features/cartSlice'
import ordersReducer from '../features/ordersSlice'

const reducer = combineReducers({
  cart: cartReducer,
  orders: ordersReducer
})

export const store = configureStore({
  reducer,
}); 
