import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../services/api";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    () => getProducts()
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productsStatus: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.productsStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsStatus = 'loaded'
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, state => {
                state.productsStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {reducer} = productsSlice;

export default reducer;