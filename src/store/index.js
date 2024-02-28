import { configureStore } from '@reduxjs/toolkit';
import products from '../components/catalog/productsSlice'

const store = configureStore({
    reducer: {products},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'  
  })
  
  export default store;