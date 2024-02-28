import { configureStore } from '@reduxjs/toolkit';
import products from '../components/catalog/productsSlice'
import cart from '../components/cart/cartSlice'

const store = configureStore({
    reducer: {products, cart},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'  
  })
  
  export default store;